// Array of words
var words = ["luke-skywalker", "leia-organa", "yoda", "darth-vader", "chewbacca", "droid", "lightsaber", "han-solo", "jabba-the-hutt", "boba-fett"];
// Choose random word
var random = Math.floor(Math.random() * words.length);
var choosenWord = words[random];
var underline = [];
var correctword = [];
var wrongword = [];
console.log(choosenWord);
// create underscores based on word length
var generateunderline = () => {
    for(var i = 0; i <choosenWord.length; i++) {
        underline.push("_");
    }
    return underline;
}

console.log(generateunderline());
// catch guess of player
document.addEventListener("keypress", (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);
    if (choosenWord.indexOf(keyword) > -1) {
        correctword.push(keyword);
    }
    else {
     wrongword.push(keyword);
    }
});
// check guess
// if correct push to correct array
// if incorrect push to wrong array