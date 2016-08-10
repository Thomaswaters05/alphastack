 var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 console.log("Example to Aplhastack letters of Alphabet");

function stackLetters() {
    var show= " ";
    for (var i = 0; i < letters.length; i++) {
        if (i % 26 === 0) {
        show = show + " " + letters[i];
        console.log(show);
        }

    else {
        show = show + letters[i];
        console.log(show);
    }
}
}

stackLetters();



 var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 console.log(" ");
 console.log("Example that places a space after every fifth letter:");

function stackLetters() {
    var show= " ";
    for (var i = 0; i < letters.length; i++) {
        if (i % 5  === 0) {
        show = show + " " + letters[i];
        console.log(show);
        }

    else {
        show = show + letters[i];
        console.log(show);
    }
}
}

stackLetters();







