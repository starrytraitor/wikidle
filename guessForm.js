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
