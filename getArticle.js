async function getArticle(title) {
        let ret = {};
        await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=true&titles=${title}&format=json&origin=*`, {method: "GET"})
                .then((x) => (x.json()))
                .then((x) => (x.query.pages))
                .then((x) => (x[Object.keys(x)[0]]))
                .then((x) => ({title: x.title, body: x.extract}))
                .then((x) => (ret = x));
        return ret;
}
