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

    
    // ""FUNCTIONS"""
    var userGuesses = []
    var guessesCount = 0
    $( "#guessForm" ).on( "submit", function(e) {
        e.preventDefault();
        var input = $("#guessInput").val()
        if(userGuesses.includes(String(input))){
          $("#message").text("You've already used: " + String(input)+ "; You've guessed "+guessesCount+" times!")
        }
        else{
          guessesCount+=1
          $("#message").text("You've guessed "+guessesCount+" times!")          
          userGuesses.push(input);
        }
        console.log(guessesCount)
        console.log(input)
        console.log(userGuesses)
    });

  });
  
})(jQuery);