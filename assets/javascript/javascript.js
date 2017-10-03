var words = ["lukeskywalker", "leiaorgana", "yoda", "darthvader", "chewbacca", "droid", "lightsaber", "hansolo", "jabbathehutt", "bobafett"];
var random = Math.floor(Math.random() * words.length);
var choosenWord = words[random];
var underline = [];
var correctguess = [];
var incorrectguess = [];
var otherunderline = document.getElementsByClassName(underline)

var generateunderline = () => {
    for(var i = 0; i <choosenWord.length; i++) {
        underline.push("_");
    }
    return underline;
};

document.addEventListener("keypress", (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);
    if (choosenWord.indexOf(keyword) > -1) {
        correctguess.push(keyword);
        underline[choosenWord.indexof(keyword)] = keyword;
        docunderline[0].innerHTML = underline.join(" ");
        doccorrectguess[0].innerHTML = correctword;
        if(underline.join("") == choosenWord) {
            alert("You Got It!");
        }
    }
    else {
     wrongword.push(keyword);
     docincorrectguess[0].innerHTML = incorrectguess;
    }
});


