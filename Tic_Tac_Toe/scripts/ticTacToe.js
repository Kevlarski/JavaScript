//Function to claim a spot. Includes calls to compMove() when playing AI
function claim(id) {

    //turns id into an int
    const cell = parseInt(id);

    //get the clicked cell by passed id
    const cellClicked = document.getElementById(id);

    // if cell is empty, replace with image based on player, add the id number to the player moves array,
    // check for wincon, then change player. If vs AI is selected, and wincon not met, calls compMove()
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
    //Error message when an occupied space is clicked
    else {
        window.alert("Please pick an empty space!")
    }
}//end claim

//Starts the game (on fresh load, effectively just starts the timer). 
//Includes calls to reset() to clear the board, and compMove() for AI first move
function start() {

    //clear the board, movesets, and various board-state text
    reset();

    // Randomly determines first player using Math.random and assigns to currentPlayer
    currentPlayer = firstPlayer();

    // Changes the caption for the table to display who's turn it is
    captionChange(currentPlayer);

    //clears any previous timer and sets text back to 00s
    if (timer) {
        clearInterval(timer);
        const seconds = document.getElementById("seconds");
        seconds.innerText = "00";
        minutes.innerText = "00";
        counter = "0";
    }

    //starts new timer that increases every "second"
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

    //if vs AI is checked and O goes first, computer takes the first move
    if (document.getElementById("vsComp").checked && currentPlayer == "O") {
        compMove();
    }
}//end start


//Checks for win conditions or cat's game
function wincon(player, id) {

    //Adds finds the play again button and the winner display text
    const playAgain = document.getElementById("playAgain");
    const winner = document.getElementById("winner");

    //Combines moveset arrays and passes to checkCats()to see if cat's game is true
    const totalMoves = movesX.concat(movesO);
    const cats = checkCats(totalMoves);

    //Uses moves to represent either move set array for flexibility
    let moves;
    switch (player) {
        case "X":
            moves = movesX;
            break;
        case "O":
            moves = movesO;
            break;
    }

    //If cat's game, announce it. Actual win conditions follow to prevent last move wins
    //being announced as cat's game.
    if (cats == true) {
        winner.innerHTML = "Cat's Game!";
        playAgain.disabled = false;
        document.querySelector('caption').hidden = true;
    }

    //Checks if moveset contains any win conditions based on the last space clicked,
    // sets the proper text if so, hides the current player text, and enables the play again button
    switch (id) {
        case "1":
            if (winners[0].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[3].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[6].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            break;
        case "2":
            if (winners[0].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[4].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            break;
        case "3":
            if (winners[0].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[4].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[7].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            break;
        case "4":
            if (winners[1].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[3].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            break;
        case "5":
            if (winners[1].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[4].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[6].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[7].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            break;
        case "6":
            if (winners[1].every(m => moves.includes(m))) {
                playAgain.disabled = false;
                winner.innerText = player + " wins!";
                document.querySelector('caption').hidden = true;
            }
            else if (winners[5].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            break;
        case "7":
            if (winners[2].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[3].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[7].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            break;
        case "8":
            if (winners[3].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[4].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            break;
        case "9":
            if (winners[2].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[5].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            else if (winners[6].every(m => moves.includes(m))) {
                winner.innerText = player + " wins!";
                playAgain.disabled = false;
                document.querySelector('caption').hidden = true;
            }
            break;
    }
}//end wincon

