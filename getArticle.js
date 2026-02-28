async function getArticle(title) {
        const paramsObj = {
                action: "query",
                prop: "extracts",
                explaintext: true,
                titles: title,
                format: "json",
                origin: "*"
        };
        const params = new URLSearchParams(paramsObj);
        let ret = {};
        await fetch(`https://en.wikipedia.org/w/api.php?${params.toString()}`)
                .then((x) => (x.json()))
                .then((x) => (x.query.pages))
                .then((x) => (x[Object.keys(x)[0]]))
                .then((x) => ({title: x.title, body: x.extract}))
                .then((x) => (ret = x));
        return ret;
}

async function getArticleCategories(title) {
        const paramsObj = {
                action: "query",
                prop: "categories",
                titles: title,
                format: "json",
                cllimit: "max",
                origin: "*"
        };
        const params = new URLSearchParams(paramsObj);
        let ret = {};
        await fetch(`https://en.wikipedia.org/w/api.php?${params.toString()}`)
                .then((x) => (x.json()))
                .then((x) => (x.query.pages))
                .then((x) => (x[Object.keys(x)[0]]))
                .then((x) => (x.categories.map((y) => (y.title))))
                .then((x) => (ret = x));
        return ret;
}
