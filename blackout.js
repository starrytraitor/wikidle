function blackout(article, guesses) {
        let guessesLocs = {};
        guesses.forEach((guess) => {
                guessesLocs[guess] = findInArticle(guess, article);
        });

        let guessLocs = [];
        for (let guess in guessesLocs) {
                for (let loc of guessesLocs[guess])
                        guessLocs.push({start: loc, end: loc + guess.length});
        }

        guessLocs.sort((v,u) => (v.start>u.start));

        if (guessLocs.at(0)?.start === -2) return false;

        expand2punc(article, guessLocs)
        expand2wtsp(article, guessLocs)
        combineOverlapping(guessLocs)


        let ret = "";
        let j = 0;
        for (let i = 0; i < article.body.length; i++) {
                if (i === guessLocs[j]?.start) {
                        ret += "<span class='guess'>";
                        if (article.body[i].match(/[^\S\r\n]/)) {
                                ret += "&nbsp;";
                                continue;
                        }
                }
                if (i+1 === guessLocs[j]?.end) {
                        ret += (article.body[i].match(/[^\S\r\n]/) ?
                                  "&nbsp;"
                                : article.body[i]) + "</span>";
                        j++;
                        continue;
                }

                ret += article.body[i];
        }

        return ret;
}

// expands visible regions to include surrounding punctuation
function expand2punc(article, guessLocs) {
        for (let guessLoc of guessLocs) {
                console.log(guessLoc)
                while (guessLoc.start && article.body[guessLoc.start-1].match(/[^\w\s]/))
                        guessLoc.start--;
                while (article.body[guessLoc.end].match(/[^\w\s]/))
                        guessLoc.end++;
        }
}

// expands visible regions to include surrounding spaces
function expand2wtsp(article, guessLocs) {
        for (let guessLoc of guessLocs) {
                while (guessLoc.start && article.body[guessLoc.start-1].match(/[^\S\r\n]/))
                        guessLoc.start--;
                while (article.body[guessLoc.end].match(/[^\S\r\n]/))
                        guessLoc.end++;
        }
}


// combines overlapping guesses (including those adjacent, since they've
// been expanded to contain punctuation and spaces)
function combineOverlapping(guessLocs) {
        for (let i = 0; i < guessLocs.length; i++) {
                if (guessLocs[i].end > guessLocs[i+1]?.start) {
                        guessLocs[i].end = Math.max(
                                guessLocs[i].end,
                                guessLocs[i+1]?.end ?? -Infinity
                        );
                        guessLocs.splice(i+1,1);
                        i--;
                }
        }
}
