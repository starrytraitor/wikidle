var userGuesses = []
    var guessesCount = 0
    $( "#guessForm" ).on( "submit", function(e) {
        e.preventDefault();
        var input = $("#guessInput").val()
        if(userGuesses.includes(String(input))){
          $("#userMessage").text("You've already used: " + String(input)+ "; You've guessed "+guessesCount+" times!")
        }
        else{
          guessesCount+=1
          $("#userMessage").text("You've guessed "+guessesCount+" times!")          
          userGuesses.push(input);
          var articleName = $("#articleName").text().replaceAll("\n", '')
          articleName = articleName.replaceAll("=", '')
          getArticle(articleName).then((result => {
            console.log(articleName)
            var count = findInArticle(String(input), result).length
            var newRow = `<tr><td>${input}</td><td>${count}</td></tr>`
            $("#guessTable tbody").append(newRow)
          }));

        }
    });
