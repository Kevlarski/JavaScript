//Declaring variables
let currentPlayer;
let counter = 0;
let timer;
let movesX = [];
let movesO = [];

//Defining the win states
const rowTop = [1,2,3];
const rowMid = [4,5,6];
const rowBottom = [7,8,9];
const colLeft = [1,4,7];
const colMid = [2,5,8];
const colRight = [3,6,9];
const diagLeft = [1,5,9];
const diagRight = [3,5,7];
const winners = [rowTop,rowMid,rowBottom,colLeft,colMid,colRight,diagLeft,diagRight];

function claim(id){
    
    const cell = parseInt(id);
    
    //get the clicked cell by passed id
    const cellClicked = document.getElementById(id); 
    
    // if cell is empty, replace with image, add the id number to the player moves array, sort it, check for wincon, then change player.
    if(cellClicked.innerHTML.length==0){
        if(currentPlayer=="X"){
            cellClicked.innerHTML="<img src=\"assets/ex.png\">";
            movesX.push(cell);
            movesX.sort;
            if(movesX.length>2){wincon("X", id);}
            currentPlayer = "O";
            captionChange(currentPlayer);
        }
        else{
            cellClicked.innerHTML="<img src=\"assets/oh.png\">";
            movesO.push(cell);
            movesO.sort;
            wincon("O", id);
            currentPlayer = "X";
            captionChange(currentPlayer);
        }
    }
    else{
        window.alert("Please pick an empty space!")
    }
    
}//end claim

function start(){
    reset();
    // Randomly determines first player using Math.random
    currentPlayer=firstPlayer();

    // Changes the caption for the table to display who's turn it is
    captionChange(currentPlayer);

    //clears any previous timer
    if(timer){
        clearInterval(timer);
        const seconds = document.getElementById("seconds");
        seconds.innerText = "00";
        minutes.innerText = "00";
        counter = "0";
    }
    
    //starts new timer
    timer  = setInterval(function increase() {
        counter++;
        const seconds = document.getElementById("seconds");
        const minutes = document.getElementById("minutes");
        if(counter<=9){
            seconds.innerHTML="0"+counter;
        }
        else if(counter>59){
            counter=0;
            minutes.innerHTML++;
            if(counter<=9){
                seconds.innerHTML="0"+counter;
            }
            else{
                seconds.innerHTML=counter;
            }
        }
        else{
            seconds.innerHTML=counter;
        }
    }, 1000); 
 }//end start



  function wincon(player, id) {
    
    const winner = document.getElementById("winner");
    let totalMoves = movesX.concat(movesO);
    let cats = checkCats(totalMoves);
    
    let moves;
    switch(player){
        case "X":
            moves = movesX;
            break;
        case "O":
            moves = movesO;
            break;
    }

    if(cats==true){
        winner.innerText = "Cat's Game!";
        document.getElementById("playAgain").disabled=false;
    }
    else{ 
        switch(id){
            case "1":
                if(winners[0].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[3].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[6].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                break;
            case "2":
                if(winners[0].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[4].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                break;
            case "3":
                if(winners[0].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[4].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[7].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                break;
            case "4":
                if(winners[1].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[3].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                break;
            case "5":
                if(winners[1].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[4].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[6].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[7].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                break;
            case "6":
                if(winners[1].every(m =>moves.includes(m))){
                    document.getElementById("playAgain").disabled=false;
                    winner.innerText = player + " wins!";
                }
                else if(winners[5].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                break;
            case "7":
                if(winners[2].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[3].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[7].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                break;
            case "8":
                if(winners[3].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[4].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                break;
            case "9":
                if(winners[2].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[5].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                else if(winners[6].every(m =>moves.includes(m))){
                    winner.innerText = player + " wins!";
                    document.getElementById("playAgain").disabled=false;
                }
                break;    
        }
    }
}//end wincon

function reset(){
    gridFinder();
    document.getElementById("winner").innerText="";
    spaces.forEach(element => {element.innerText=""});
    if(movesO.length>0||movesX.length>0){
        movesO.splice(0,movesO.length);
        movesX.splice(0,movesX.length);
    }
}