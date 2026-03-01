function blackout(article, guesses) {
        let guessesLocs = {};
        guesses.forEach((guess) => {
                guessesLocs[guess] = findInArticle(guess, article);
        });

        console.log(guessesLocs);

        let guessLocs = [];
        for (let guess in guessesLocs) {
                for (let loc of guessesLocs[guess])
                        guessLocs.push({start: loc, end: loc + guess.length});
        }

        guessLocs.sort((v,u) => (v.start>u.start));

        console.log(guessLocs);

        // expands visible regions to include surrounding punctuation
        for (let guessLoc of guessLocs) {
                while (article.body[guessLoc.start-1].match(/[^\w\s]/))
                        guessLoc.start--;
                while (article.body[guessLoc.end].match(/[^\w\s]/))
                        guessLoc.end++;
        }

        // expands visible regions to include surrounding spaces
        for (let guessLoc of guessLocs) {
                while (article.body[guessLoc.start-1].match(/\s/))
                        guessLoc.start--;
                while (article.body[guessLoc.end].match(/\s/))
                        guessLoc.end++;
        }

        let ret = "";
        let j = 0;
        for (let i = 0; i < article.body.length; i++) {
                if (i === guessLocs[j]?.start) ret += "<span class='guess'>";
                if (i === guessLocs[j]?.end) {
                        ret += "</span>";
                        j++;
                }
                ret += article.body[i];
        }

        return ret;
}
