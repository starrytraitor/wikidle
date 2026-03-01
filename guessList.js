function guessList(guesses) {
        const guessesStr = guesses.map((g) => (`<li>${g}</li>`)).join("\n");
        return `<ol>\n${guessesStr}\n</ol>`
}
