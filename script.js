(function ($) {
  // We use some Javascript and the URL #fragment to hide/show different parts of the page
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
  $(window).on('load hashchange', function(){


    // First hide all content regions, then show the content-region specified in the URL hash
    // (or if no hash URL is found, default to first menu item)
    $('.content-region').hide();

    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');

    // Now show the region specified in the URL hash
    $(region).show();

    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.main-menu a[href="'+ region +'"]').addClass('active');

    const date = (new Date()).toDateString();

    // ""FUNCTIONS""
    const articleTitle = ARTICLE_LIST[Math.floor(Math.random() * ARTICLE_LIST.length)];
// <<<<<<< HEAD

    let article = {};

    getArticle(articleTitle).then((result => { $("#articleContents").html(parseArticle((article = result).body)) }));

// =======
    // getArticle(articleTitle).then((result => {
      // console.log(result);
      // $("#articleName").html(parseTitle(result.title)),
      // $("#articleContents").html(parseArticle(result.body)),
      // console.log(parseTitle(result.title)),
      // console.log(parseArticle(result.body)
    // )}));
    //
// >>>>>>> 

    let userGuesses = localStorage.get("date") === date ? JSON.parse(localStorage.get("guesses") ?? "[]") : [];
    localStorage.set("date", date);
    $( "#guessForm" ).on( "submit", function(e) {
        e.preventDefault();

        const input = $("#guessInput").val();
        $("#guessInput").val("");
        userGuesses.push(input);
        $("#guessInput").val("");
        $("#guessList").html(`<h2>Your guess${userGuesses.length === 1 ? "" : "es"}:</h2>\n${guessList(userGuesses, article)}`)

        const x = blackout(article, userGuesses);

        if (x) $("#articleContents").html(parseArticle(x));
        else {
                $("#articleContents").html(parseArticle(`<span class="guess">\n${article.body}\n</span>`));
                $("#winPopup").html(createWinPopup(article, userGuesses))
                $("#winPopup").toggle();
        }

        localStorage.set("guesses", JSON.stringify(userGuesses));

        // console.log(checkVictory(userGuesses, articleTitle));
    });


  });

})(jQuery);
