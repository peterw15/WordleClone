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
    document.getElementById("numOfGuess").innerHTML = "Lives " + lives;
    document.getElementById("entryBox").style.border = "black solid 5px";
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
        
        document.getElementById("guess" + lives.toString()).innerHTML =  currentGuess;
        lives--;
        document.getElementById("numOfGuess").innerHTML = "Lives: " + lives;
        if (currentGuess == currentWord) {
            document.getElementById("entryBox").style.border = "solid lightgreen 5px";
            stillPlaying = false;
        }
        else {
            document.getElementById("entryBox").style.border = "solid red 5px";
        }
        checkLives();
    }

    
}

function checkLives() {
    if (lives == 0) {
        stillPlaying = false;
    }
}

function result(res) {
    if (res) {

    }
    else {
        
    }
}