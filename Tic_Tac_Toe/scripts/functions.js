//Declaring variables
let currentPlayer;
let counter = 0;
let timer;
let playerNumber;

//Initializing arrays
const movesX = [];
const movesO = [];
const spaces = [];
let open = [];

//Defining the win states and putting them in an array
const rowTop = [1, 2, 3];
const rowMid = [4, 5, 6];
const rowBottom = [7, 8, 9];
const colLeft = [1, 4, 7];
const colMid = [2, 5, 8];
const colRight = [3, 6, 9];
const diagLeft = [1, 5, 9];
const diagRight = [3, 5, 7];
const winners = [rowTop, rowMid, rowBottom, colLeft, colMid, colRight, diagLeft, diagRight];

//Selects the caption element and changes the text
function captionChange(player) {
    const caption = document.querySelector('caption');
    caption.innerHTML = "It's " + player + "'s turn!";
} //end captionChange

//Randomly determines which token plays first
function firstPlayer() {
    const firstPlayer = ((Math.random() * 10).toFixed()) % 2;
    if (firstPlayer == 1) {
        return "X";
    }
    else if (firstPlayer == 0) {
        return "O";
    }
} //end firstPlayer

//Fills the spaces array with references to all the grid elements
function gridFinder() {
    spaces.push(document.getElementById("1"));
    spaces.push(document.getElementById("2"));
    spaces.push(document.getElementById("3"));
    spaces.push(document.getElementById("4"));
    spaces.push(document.getElementById("5"));
    spaces.push(document.getElementById("6"));
    spaces.push(document.getElementById("7"));
    spaces.push(document.getElementById("8"));
    spaces.push(document.getElementById("9"));
}



//Checks to see if passed array has a length of 9 (max number of moves on the board)
function checkCats(array) {
    if (Array.isArray(array)) {
        if (array.length == 9) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        alert("Problem with the cats array")
    }
}

//Calls gridFinder() then iterates through spaces[] and clears the element's innerText
//also clears the winner/cat's text and the move arrays for both players
function reset() {
    gridFinder();
    const caption = document.querySelector('caption');
    caption.innerHTML = "";
    caption.hidden = false;
    document.getElementById("winner").innerText = "";
    spaces.forEach(element => { element.innerText = "" });
    if (movesO.length > 0 || movesX.length > 0) {
        movesO.splice(0, movesO.length);
        movesX.splice(0, movesX.length);
    }
    //clears any previous timer, resets view to 00s
    if (timer) {
        clearInterval(timer);
        const seconds = document.getElementById("seconds");
        seconds.innerText = "00";
        minutes.innerText = "00";
        counter = "0";
    }

    //disables the play again button
    document.getElementById("playAgain").disabled = true;

    //if vs AI is selected, and O starts, plays the first move
    if (document.getElementById("vsComp").checked && currentPlayer == "O") {
        compMove();
    }
}//end reset

//Simulated AI for computer moves
function compMove() {
    //clears open[]
    open = [];
    //clears spaces[]
    spaces.splice(0, spaces.length);
    //repopulates spaces[] to be safe
    gridFinder();

    //looks for the spots without images
    let i = 0;
    while (i < 9) {

        if (spaces[i].innerHTML.length < 1) {
            open.push(spaces[i]);
        }
        i++;
    }//end while

    //picks a random number based on the number of open spots
    let chooser = (Math.random()) * (open.length);
    let choice;
    //checks if open has one entry
    if (open.length == 1) {
        choice = open[0];
    }
    //sets choice to the element in the open array
    else {
        choice = open[chooser.toFixed()];
    }

    //makes sure the spot is empty
    if (choice.innerText.length < 1) {
        claim(choice.id);
    }
    else {
        alert("oops");
    }
}//end compMove