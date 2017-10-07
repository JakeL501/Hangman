//I could not figure out how to move to a new word. So I just made a one time play game. 
//I know how to add a score to an array and into the html but just simply could not solve the new word generator.
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
var chosenWord = words[random];
var underline = [];
var correctguess = [];
var incorrectguess = [];
var lives = -1;
var wins = 0;
console.log(chosenWord);

var docunderline = document.getElementsByClassName("underline");
var doccorrectguess = document.getElementsByClassName("rightGuess");
var docincorrectguess = document.getElementsByClassName("wrongGuess");
var docwins = document.getElementsByClassName("wins");
var doclives = document.getElementsByClassName("lives");
console.log(chosenWord);

var generateunderline = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underline.push("_ ");
    }
    return underline;

};
console.log(generateunderline());
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);

    if (chosenWord.includes(keyword)) {
        correctguess.push(keyword);
        underline[chosenWord.indexOf(keyword)] = keyword;
        docunderline[0].innerHTML = underline.join("");
        doccorrectguess[0].innerHTML = correctguess;
        if (underline.join("") == chosenWord) {
            alert("The Force is Strong in you! Refresh to start a new game!");
        //     chosenWord.forEach(function (newWord, index){
        //         console.log(index + 1 + ". " + newWord);
        }
        //     )} attempt at creating a new word
    


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

        // "<p>Wins: " + wins + "</p>" +
        "<p>Incorrect Guess Number: " + lives + "</p>";



    
    document.querySelector(".wins").innerHTML = html;
    
});