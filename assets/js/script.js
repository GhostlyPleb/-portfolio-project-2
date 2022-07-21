const rock = document.getElementById('rock'); //gets id's for buttons
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');

var playerChoice = null; 
var cpuChoice = null;

var playerScore = 0;
var cpuScore = 0;

var win = "WIN!";
var lose = "LOSE!";
var draw = "DRAW!";

rock.onclick = function(){ //detects when the user clicks the rock button
    playerChoice = 1;
    console.log(playerChoice); //testing the the dection of each click in the console.
    cpuTurn();
    result();
    console.log(playerScore, cpuScore); //logs the player and cpu score to console
    choiceDisplay();
};

paper.onclick = function(){ //detects when the user clicks the paper button
    playerChoice = 2;
    console.log(playerChoice); //testing the the dection of each click in the console.
    cpuTurn();
    result();
    console.log(playerScore, cpuScore); //logs the player and cpu score to console
    choiceDisplay();
    };

scissors.onclick = function(){ //detects when the user clicks the scissors button
    playerChoice = 3;
    console.log(playerChoice); //testing the the dection of each click in the console.
    cpuTurn();
    result();
    console.log(playerScore, cpuScore); //logs the player and cpu score to console
    choiceDisplay();
    };

lizard.onclick = function(){ //detects when the user clicks the lizard button
    playerChoice = 4;
    console.log(playerChoice); //testing the the dection of each click in the console.
    cpuTurn();
    result();
    console.log(playerScore, cpuScore); //logs the player and cpu score to console
    choiceDisplay();
    };

spock.onclick = function(){ //detects when the user clicks the spock button
    playerChoice = 5;
    console.log(playerChoice); //testing the the dection of each click in the console.
    cpuTurn();
    result();
    console.log(playerScore, cpuScore); //logs the player and cpu score to console
    choiceDisplay();
    };

function choiceDisplay(){ //displays the player and cpu choice
    
    var playerChoiceDisplay = ["ROCK","PAPER","SCISSORS","LIZARD","SPOCK"];
    var cpuChoiceDisplay = ["ROCK","PAPER","SCISSORS","LIZARD","SPOCK"];

    playerChoice = playerChoice -1; 
    cpuChoice = cpuChoice -1;

    document.getElementById("p_optionSelected").innerText= playerChoiceDisplay[playerChoice]; //displays player choice
    document.getElementById("c_optionSelected").innerText= cpuChoiceDisplay[cpuChoice]; //displays cpu choice
}

function playerWin(){ //function for when the players wins
    playerScore = playerScore + 1;
    document.getElementById("playerDisplay_score").innerText = playerScore; //updates the player score
    document.getElementById("feedback").innerText= win; //displays to player that they have won the hand
    if(playerScore == 10){
        alert("YOU HAVE BEATEN THE MACHINE!"); //alerts the player that the cpu has lost when max score has been reached
        window.location.reload(); //reloads the page if player or cpu win
    }
}

function cpuWin(){ //function for when the cpu wins
    cpuScore = cpuScore + 1;
    document.getElementById("cpuDisplay_score").innerText = cpuScore; //updates the cpu score
    document.getElementById("feedback").innerText= lose; //displays to player that they have losed the hand
    if(cpuScore == 10){
        alert("THE MACHINE HAS BEATEN YOU ... SKYNET IS ALREADY UPON US IT SEEMS!"); //alerts the player that the cpu has won when max score has been reached
        window.location.reload(); //reloads the page if player or cpu win
    }
}

function gameDraw(){ //function for when the game has resulted in a draw
    document.getElementById("feedback").innerText= draw; //displays to player that they have drawed on the hand
}

function cpuTurn() { //function for simulating the cpu turn
    cpuChoice = Math.floor(Math.random()*5) + 1; //randomly generating a number to simulate cpu choice
    console.log(cpuChoice);
}

function result() { //function to determine the outcome of each hand
     
    //depending on what the player and cpu chooses, each of the below cases and nested if statements will determine the appropriate outcome
    //depending on who wins will call the function for the winner.

    switch(playerChoice){ 
        case 1: //cpu rock selection
            if(cpuChoice == 1){
                console.log("DRAW!");
                gameDraw();
            }
            if(cpuChoice == 2){
                console.log("LOSE!");
                cpuWin();
            }
            if(cpuChoice == 3){
                console.log("WIN!");
                playerWin();
            }
            if(cpuChoice == 4){
                console.log("WIN!");
                playerWin();
            }
            if(cpuChoice == 5){
                console.log("LOSE!");
                cpuWin();
            }
            break;
        case 2: //cpu paper selection
            if(cpuChoice == 1){
                console.log("WIN!");
                playerWin();
            }
            if(cpuChoice == 2){
                console.log("DRAW!");
                gameDraw();
            }
            if(cpuChoice == 3){
                console.log("LOSE!");
                cpuWin();
            }
            if(cpuChoice == 4){
                console.log("LOSE!");
                cpuWin();
            }
            if(cpuChoice == 5){
                console.log("WIN!");
                playerWin();
            }
            break;
        case 3: //cpu scissors selection
            if(cpuChoice == 1){
                console.log("LOSE!");
                cpuWin();
            }
            if(cpuChoice == 2){
                console.log("WIN!");
                playerWin();
            }
            if(cpuChoice == 3){
                console.log("DRAW!");
                gameDraw();
            }
            if(cpuChoice == 4){
                console.log("WIN!");
                playerWin();
            }
            if(cpuChoice == 5){
                console.log("LOSE!");
                cpuWin();
            }
            break;
        case 4: //cpu lizard selection
            if(cpuChoice == 1){
                console.log("LOSE!");
                cpuWin();
            }
            if(cpuChoice == 2){
                console.log("WIN!");
                playerWin();
            }
            if(cpuChoice == 3){
                console.log("LOSE!");
                cpuWin();
            }
            if(cpuChoice == 4){
                console.log("DRAW!");
                gameDraw();
            }
            if(cpuChoice == 5){
                console.log("WIN!");
                playerWin();
            }
            break;
        case 5: //cpu spock selection
            if(cpuChoice == 1){
                console.log("WINS!");
                playerWin();
            }
            if(cpuChoice == 2){
                console.log("LOSE!");
                cpuWin();
            }
            if(cpuChoice == 3){
                console.log("WIN!");
                playerWin();
            }
            if(cpuChoice == 4){
                console.log("LOSE!");
                cpuWin();
            }
            if(cpuChoice == 5){
                console.log("DRAW!");
                gameDraw();
            }
            break;
    }
}









