function createWinPopup(article, userGuesses) {
        return `<h2>Congratulations!</h2>
                You won the article "${article.title}" in ${userGuesses.length}
                guess${userGuesses.length === 1 ? "" : "es"}!<br>
                Your guesses were:<br>
                ${guessList(userGuesses, article)}
        `;
}
