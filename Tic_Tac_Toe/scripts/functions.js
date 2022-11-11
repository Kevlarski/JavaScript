//Declaring variables
let currentPlayer;
let counter = 0;
let timer;
let playerNumber;
const movesX = [];
const movesO = [];
const spaces = [];
const open = [];

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

// //Looks to see how many humans are playing
// function playerNum(){
//     const vsComp = document.getElementById("vsComp");
//     if(vsComp.checked==true){
//         document.location.href = "./singlePlayer.html";
//         playerNum = 1;
//     }
//     else{
//         document.location.href = "./twoPlayer.html";
//         playerNum =2;
//     }
// }//end playerMenu

//Fills the spaces array with references to all the grid spaces
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



//Checks to see if passed array has a length of 9
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
        window.alert("Problem with the cats array")
    }
}

//Calls gridFinder() then iterates through spaces[] and clears the element's innerText
//also clears the winner/cat's text and the move arrays for both players
function reset() {
    gridFinder();
    document.getElementById("winner").innerText = "";
    spaces.forEach(element => { element.innerText = "" });
    if (movesO.length > 0 || movesX.length > 0) {
        movesO.splice(0, movesO.length);
        movesX.splice(0, movesX.length);
    }
    //clears any previous timer
    if (timer) {
        clearInterval(timer);
        const seconds = document.getElementById("seconds");
        seconds.innerText = "00";
        minutes.innerText = "00";
        counter = "0";
    }
    document.getElementById("playAgain").disabled = true;
    if (document.getElementById("vsComp").checked && currentPlayer == "O") {
        compMove();
    }
}//end reset

function compMove() {
    //clears open[]
    open.splice(0,open.length);
    spaces.splice(0,spaces.length);
    //makes sure spaces[] is populated
    gridFinder();

    //looks for the spots without images
    let i = 0;
    while (i < 9) {
        
        if(spaces[i].innerHTML.length<1){
            open.push(spaces[i]);
        }
        i++;
    }
    //picks a random number based on the number of open spots
    let chooser = (Math.random()*(open.length)).toFixed();
    let choice = open[parseInt(chooser)];
    
    if(choice.innerHTML.length<1){
        alert(choice.id);
        claim(choice.id);
    }
    else{
        alert("oops");
    }
    
    
}

function checkBlank(space) {
    if (space.innerHTML == "") {
        return true;
    }
}
