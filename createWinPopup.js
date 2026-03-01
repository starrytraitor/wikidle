function createWinPopup(article, userGuesses) {
        return `Congradulations!  You won the article "${article.title}" in ${userGuesses.length} guesses!
                Your guesses were:
                ${guessList(userGuesses)}
        `;
}
