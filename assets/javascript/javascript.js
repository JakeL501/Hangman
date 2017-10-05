var words = ["lukeskywalker", "leiaorgana", "yoda", "darthvader", "chewbacca", "droid", "lightsaber", "hansolo", "jabbathehutt", "bobafett"];
var random = Math.floor(Math.random() * words.length);
var choosenWord = words[random];
var underline = [];
var correctguess = [];
var incorrectguess = [];
var lives = [];
console.log(choosenWord);
var docunderline = document.getElementsByClassName("underline");
var doccorrectguess = document.getElementsByClassName("rightGuess");
var docincorrectguess = document.getElementsByClassName("wrongGuess");
console.log(choosenWord);
var generateunderline = () => {
    for (var i = 0; i < choosenWord.length; i++) {
        underline.push("_");
    }
    return underline;

};
console.log(generateunderline());
document.addEventListener("keypress", (event) => {
    var keyword = String.fromCharCode(event.keyCode);

    if (choosenWord.indexOf(keyword) > -1) {
        correctguess.push(keyword);
        underline[choosenWord.indexOf(keyword)] = keyword;
        docunderline[0].innerHTML = underline.join("");
        doccorrectguess[0].innerHTML = correctguess;
        if (underline.join("") == choosenWord) {}
        console.log(correctguess);


    } else {
        incorrectguess.push(keyword);
        docincorrectguess[0].innerHTML = incorrectguess;
        console.log(incorrectguess)
    }
});