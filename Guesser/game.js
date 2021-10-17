let words = [
    {
        "inputs": 5,
        "category": "Team Sports",
        "word": "Football"
    },
    {
        "inputs": 6,
        "category": "Capital of a Central European Country",
        "word": "Budapest"
    },

    {
        "inputs": 6,
        "category": "Oldest programming language",
        "word": "Fortran"
    },

]


$(document).ready(function () {
    knowWords();
})

function knowWords() {
    const generatedWord = words[Math.floor(Math.random() * words.length)];
    $("#blanks").empty();

    for (let i = 0; i < generatedWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`;
        $("#blanks").append(input_html)
    }
    
    $("#hint").html(generatedWord.category)

    var gameOver = false;

    $(".clickable").click(function () {
        var correctGuess = false; 
        
        //setting the attribute of the id
        let id = $(this).attr("id");


        //GET A LIFE!!
        var life = parseInt($("#life").text())


        for (var i = 0; i< generatedWord.word.length; i++) {
            if(generatedWord.word.charAt(i).toLowerCase() == id){

                if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    if($("blanks").text() === generatedWord.word.toLowerCase() ) {
                        $("#result").text("YAYY!! YOU WON!!");
                        correctGuess = true;
                        gameOver = true;
                    }
                }
            }
        }
        if (life > 0 && correctGuess!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lost!!")
        }
        
    });        

}