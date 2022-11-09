let playerNumber;
let spaces = [];

function captionChange(player){
    const caption = document.querySelector('caption');
    caption.innerHTML="It's " + player + "'s turn!";
}//end captionChange

function firstPlayer(){
    const firstPlayer = ((Math.random()*10).toFixed())%2;
    if(firstPlayer==1){
        return "X";
    }
    else if(firstPlayer==0){
        return "O";
    }
}//end firstPlayer

function playerNum(){
    // Makes the player select menu invisble
    const vsComp = document.getElementById("vsComp");
    if(vsComp.checked==true){
        document.location.href = "./singlePlayer.html";
        playerNum = 1;
    }
    else{
        document.location.href = "./twoPlayer.html";
        playerNum =2;
    }
}//end playerMenu

function gridFinder(){
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

function play(){
    document.location.href = "./index.html";
}//end play

function checkCats(array){
    if(Array.isArray(array)){
        if(array.length==9){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        window.alert("Problem with the cats array")
    }
}

function movesPushNSwich(player, id){
    const cell = parseInt(id);
    switch(player){
        case "X":
            movesX.push(cell);
            if(array.length>2){wincon(id);}
            currentPlayer = "O";
            captionChange(currentPlayer);
            break;
        case "O":
            movesO.push(cell);
            if(array.length>2){wincon(id);}
            currentPlayer = "X";
            captionChange(currentPlayer);
            break; 
    }
}