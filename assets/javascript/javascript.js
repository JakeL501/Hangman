var words = [
    "luke", 
    "leia", 
    "yoda", 
    "vader", 
    "chewy", 
    "lightsaber", 
    "han", 
    "blaster", 
    "xwing", 
    "obiwan", 
    "sith", 
    "jedi", 
    "war", 
    "space", 
    "planets", 
    "star", 
    "aliens",  
    "rogue", 
    "republic", 
    "clones", 
    "force"
];

var random = Math.floor(Math.random() * words.length);
var choosenWord = words[random];
var underline = [];
var correctguess = [];
var incorrectguess = [];
var lives = -1;
var wins = 0;
console.log(choosenWord);

var docunderline = document.getElementsByClassName("underline");
var doccorrectguess = document.getElementsByClassName("rightGuess");
var docincorrectguess = document.getElementsByClassName("wrongGuess");
var docwins = document.getElementsByClassName("wins");
var doclives = document.getElementsByClassName("lives");
console.log(choosenWord);

var generateunderline = () => {
    for (var i = 0; i < choosenWord.length; i++) {
        underline.push("_ ");
    }
    return underline;

};
console.log(generateunderline());
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);

    if (choosenWord.includes(keyword)) {
        correctguess.push(keyword);
        underline[choosenWord.indexOf(keyword)] = keyword;
        
        docunderline[0].innerHTML = underline.join("");
        doccorrectguess[0].innerHTML = correctguess;
        if (underline.join("") == choosenWord) {
            wins++;
        }


        console.log(correctguess);



    } else {
        incorrectguess.push(keyword);
        docincorrectguess[0].innerHTML = incorrectguess;
        console.log(incorrectguess);
        lives++;
        if (lives == 10)
            alert("You Have Failed Me For The Last Time! Refresh the page to start a new game.");


    }
    var html =

        "<p>Wins: " + wins + "</p>" +
        "<p>Guess: " + lives + "</p>";



    // Set the inner HTML contents of the #game div to our html string
    document.querySelector(".wins").innerHTML = html;
    
});