

function claim(id) {

    const cell = parseInt(id);

    //get the clicked cell by passed id
    const cellClicked = document.getElementById(id);

    // if cell is empty, replace with image, add the id number to the player moves array, sort it, check for wincon, then change player.
    if (cellClicked.innerHTML.length == 0) {
        if (currentPlayer == "X") {
            cellClicked.innerHTML = "<img src=\"assets/ex.png\">";
            movesX.push(cell);
            if (movesX.length > 2) { wincon("X", id); }
            currentPlayer = "O";
            captionChange(currentPlayer);
            if (document.getElementById("vsComp").checked &&
                document.getElementById("winner").innerText.length < 1) {
                compMove();
                document.querySelector('caption').innerText = "";
            }
        }
        else {
            cellClicked.innerHTML = "<img src=\"assets/oh.png\">";
            movesO.push(cell);
            if (movesO.length > 2) { wincon("O", id); }
            currentPlayer = "X";
            captionChange(currentPlayer);
        }
    }
    else {
        window.alert("Please pick an empty space!")
    }

}//end claim

function start() {
    reset();
    // Randomly determines first player using Math.random
    currentPlayer = firstPlayer();

    // Changes the caption for the table to display who's turn it is
    captionChange(currentPlayer);

    //clears any previous timer
    if (timer) {
        clearInterval(timer);
        const seconds = document.getElementById("seconds");
        seconds.innerText = "00";
        minutes.innerText = "00";
        counter = "0";
    }

    //starts new timer
    timer = setInterval(function increase() {
        counter++;
        const seconds = document.getElementById("seconds");
        const minutes = document.getElementById("minutes");
        if (counter <= 9) {
            seconds.innerHTML = "0" + counter;
        }
        else if (counter > 59) {
            counter = 0;
            minutes.innerHTML++;
            if (counter <= 9) {
                seconds.innerHTML = "0" + counter;
            }
            else {
                seconds.innerHTML = counter;
            }
        }
        else {
            seconds.innerHTML = counter;
        }
    }, 1000);

    if (document.getElementById("vsComp").checked && currentPlayer == "O") {
        compMove();
    }
}//end start



function wincon(player, id) {
    //Adds finds the play again button and the winner display text
    const playAgain = document.getElementById("playAgain"); //do these need to be global?
    const winner = document.getElementById("winner");


    //Adds all moves to see if all spaces have been taken
    const totalMoves = movesX.concat(movesO);
    const cats = checkCats(totalMoves);

    //Uses moves to represent either move set array for simplicity
    let moves;
    switch (player) {
        case "X":
            moves = movesX;
            break;
        case "O":
            moves = movesO;
            break;
    }

    
    
    switch (id) {
        case "1":
            if (winners[0].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[3].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[6].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            break;
        case "2":
            if (winners[0].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[4].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            break;
        case "3":
            if (winners[0].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[4].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[7].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            break;
        case "4":
            if (winners[1].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[3].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            break;
        case "5":
            if (winners[1].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[4].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[6].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[7].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            break;
        case "6":
            if (winners[1].every(m => moves.includes(m))) {
                playAgain.disabled = false;
                winner.innerText = player + " wins!";
            }
            else if (winners[5].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            break;
        case "7":
            if (winners[2].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[3].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[7].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            break;
        case "8":
            if (winners[3].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[4].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            break;
        case "9":
            if (winners[2].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[5].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            else if (winners[6].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
            }
            break;
    }
    if (cats == true) {
        winner.innerHTML = "Cat's Game!";
        playAgain.disabled = false;
    }
    
    if (winner.innerHTML.length > 0) {
        document.querySelector('caption').innerHTML = "";
    }
}//end wincon

