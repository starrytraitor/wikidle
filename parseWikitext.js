function parseTitle(title) {
    return title.replace("\n=\n\n", "<h1>").replace("=\n", "<h1>");
}

function parseArticle(article) {
    const old = [
        /^======/, /^=====/, /^====/, /^===/, /^==/, /^=/,
        /======$/, /=====$/, /====$/, /===$/, /==$/, /=$/,
        "\n\n",];

    const replacement = [
        "<h6>","<h5>","<h4>","<h3>","<h2>","<h1>",
        "</h6>","</h5>","</h4>","</h3>","</h2>","</h1>",
        "<br><br>"];

    for (let i = 0; i < old.length; i++) {
        article = article.replaceAll(old[i], replacement[i]);
    }

    return article;
}

function checkVictory(input, solution) {
    solution = solution.replace("\n", "").replace("=", "").split(" ");
    let numMatched = 0;
    for (let i = 0; i < solution.length; i++) {
        if (input.includes(solution[i].toLowerCase())) {
            numMatched++;
        }
    }
    return numMatched == solution.length;
}
