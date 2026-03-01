function guessList(guesses, article) {
        const titleless = {...article, title: ""}
        const guessesStr = guesses.map((g) => (`<li>${g}\t<code>count: ${findInArticle(g, titleless).length}</code></li>`)).join("\n");
        return `<ol>\n${guessesStr}\n</ol>`
}
