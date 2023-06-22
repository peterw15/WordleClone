let currentWord; /**  CURRENT WORD TO GUESS  */
let currentGuess; /**  CURRENT GUESS */
let stillPlaying;
const guesses = [];
let lives;


function loadPage() {
    document.getElementById("entryBox").value = "";
    currentGuess = "";
    stillPlaying = true;
    lives = 5;
    document.getElementById("numOfGuess").innerHTML = "Lives: " + lives;
    document.getElementById("entryBox").style.border = "black solid 5px";
    // for (let i = 0; i < 5; i++) { 
    //     guesses[i] = ""; 
    //     document.getElementById("guess" + lives.toString()).innerHTML = "";
    // }

    document.getElementById("guess1").innerHTML = "";
    document.getElementById("guess2").innerHTML = "";
    document.getElementById("guess3").innerHTML = "";
    document.getElementById("guess4").innerHTML = "";
    document.getElementById("guess5").innerHTML = "";


    document.getElementById("headerContainer").innerHTML = "Guess The Five Letter Word!";
    document.getElementById("headerContainer").style.color = "white";
    document.getElementById("Keyboard").style.backgroundColor = ""; 

    loadWord();

}

function loadWord() {
    currentWord = "apple";
}


function updateLetters(val = null) {
    if (val == null) { currentGuess = document.getElementById("entryBox").value; } // Handles keyboard updates
    else {
        currentGuess = document.getElementById("entryBox").value;
        if (currentGuess.length < 5) { 
            document.getElementById("entryBox").value = currentGuess + val; // Handles onscreen keyboard updates 
        }
    }


}

function clearEntry() {
    document.getElementById("entryBox").value = "";
}

function backEntry() {
    currentGuess = document.getElementById("entryBox").value;
    document.getElementById("entryBox").value = currentGuess.substring(0, currentGuess.length - 1)
}




function submitGuess() {
    currentGuess = document.getElementById("entryBox").value.toUpperCase();
    currentWord = currentWord.toUpperCase();

    if ((currentGuess.length == 5) && stillPlaying) {
        guesses[lives] = currentGuess;
        
        let currGuess = document.getElementById("guess" + lives.toString());
        currGuess.innerHTML = currentGuess.toUpperCase();
        let newStr = "";
        for(let i = 0; i < currGuess.innerHTML.length; i++) {
            //alert(currGuess.innerHTML.charAt(i) + currentWord.charAt(i));
            if (currGuess.innerHTML.charAt(i) == currentWord.charAt(i)) {
                newStr += '<span style="color: lightGreen">' + currGuess.innerHTML.charAt(i) + '</span>';
            }
            else {
                newStr += currGuess.innerHTML.charAt(i);
            }
        } 
        currGuess.innerHTML = newStr

        lives--;
        document.getElementById("numOfGuess").innerHTML = "Lives: " + lives;
        if (currentGuess == currentWord) {
            document.getElementById("entryBox").style.border = "solid lightgreen 5px";
            stillPlaying = false;
            result(true);
        }
        else {
            checkLetters();
            document.getElementById("entryBox").style.border = "solid red 5px";
        }
        checkLives();
    }

    
}

function checkLetters() {

}

function checkLives() {
    if (lives == 0) {
        stillPlaying = false;
        result(false)
    }
}

function result(res) {
    if (res) {
        let txt = document.getElementById("headerContainer");
        let kbd = document.getElementById("Keyboard");
        txt.style.color = "lightGreen"; 
        txt.innerHTML = "You Won!";
        kbd.style.backgroundColor = "lightGreen";
    }
    else {
        let txt = document.getElementById("headerContainer");
        let kbd = document.getElementById("Keyboard");
        txt.style.color = "red";
        txt.innerHTML = "You Lost!";
        kbd.style.backgroundColor = 'rgb(158, 61, 61)';
    }
}