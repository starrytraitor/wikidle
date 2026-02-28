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
