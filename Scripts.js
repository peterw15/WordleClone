let currentWord; /**  CURRENT WORD TO GUESS  */
let currentGuess; /**  CURRENT GUESS */
let numOfGuesses;

function loadPage() {
    document.getElementById("entryBox").value = "";
    currentGuess = "";
    numOfGuesses = 0;
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

    // for(let i = 0; i < currVal.length; i++) {
    //     if (currVal.charAt(i) == currentWord.charAt(i))
    //     {

    //     }
    // }

    if (currentGuess.length == 5) {
        if (currentGuess == currentWord) {
            document.getElementById("entryBox").style.border = "solid lightgreen 5px";
            alert("SO GOOD OMG!!");

        }
        numOfGuesses++;
        document.getElementById("numOfGuess").innerHTML = "Number Of Guesses: " + numOfGuesses;
    }

    
}