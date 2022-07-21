var playerChoice = null;
var cpuChoice = null;

var playerScore = 0;
var cpuScore = 0;

var win = "WIN!";
var lose = "LOSE!";
var draw = "DRAW!";

rock.onclick = function(){
    playerChoice = 1;
    console.log(playerChoice); //testing the the dection of each click in the console.
    cpuTurn();
    result();
    console.log(playerScore, cpuScore);
    choiceDisplay();
    }

paper.onclick = function(){
    playerChoice = 2;
    console.log(playerChoice); //testing the the dection of each click in the console.
    cpuTurn();
    result();
    console.log(playerScore, cpuScore);
    choiceDisplay();
    }

scissors.onclick = function(){
    playerChoice = 3;
    console.log(playerChoice); //testing the the dection of each click in the console.
    cpuTurn();
    result();
    console.log(playerScore, cpuScore);
    choiceDisplay();
    } 

lizard.onclick = function(){
    playerChoice = 4;
    console.log(playerChoice); //testing the the dection of each click in the console.
    cpuTurn();
    result();
    console.log(playerScore, cpuScore);
    choiceDisplay();
    }

spock.onclick = function(){
    playerChoice = 5;
    console.log(playerChoice); //testing the the dection of each click in the console.
    cpuTurn();
    result();
    console.log(playerScore, cpuScore);
    choiceDisplay();
    }

function choiceDisplay(){
    
    var playerChoiceDisplay = ["ROCK","PAPER","SCISSORS","LIZARD","SPOCK"];
    var cpuChoiceDisplay = ["ROCK","PAPER","SCISSORS","LIZARD","SPOCK"];

    playerChoice = playerChoice -1; 
    cpuChoice = cpuChoice -1;

    document.getElementById("p_optionSelected").innerText= playerChoiceDisplay[playerChoice];
    document.getElementById("c_optionSelected").innerText= cpuChoiceDisplay[cpuChoice];
}

function playerWin(){
    playerScore = playerScore + 1;
    document.getElementById("playerDisplay_score").innerText = playerScore;
    document.getElementById("feedback").innerText= win;
    if(playerScore == 10){
        alert("YOU HAVE BEATEN THE MACHINE!")
        window.location.reload();
    }
}

function cpuWin(){
    cpuScore = cpuScore + 1;
    document.getElementById("cpuDisplay_score").innerText = cpuScore;
    document.getElementById("feedback").innerText= lose;
    if(cpuScore == 10){
        alert("THE MACHINE HAS BEATEN YOU ... SKYNET IS ALREADY UPON US IT SEEMS!")
        window.location.reload();
    }
}

function gameDraw(){
    document.getElementById("feedback").innerText= draw;
}

function cpuTurn() {
    cpuChoice = Math.floor(Math.random()*5) + 1;
    console.log(cpuChoice);
}

function result() {
    
    switch(playerChoice){
        case 1: //cpu rock selection
            if(cpuChoice == 1){
                console.log("DRAW!")
                gameDraw();
            }
            if(cpuChoice == 2){
                console.log("LOSE!")
                cpuWin();
            }
            if(cpuChoice == 3){
                console.log("WIN!")
                playerWin();
            }
            if(cpuChoice == 4){
                console.log("WIN!")
                playerWin();
            }
            if(cpuChoice == 5){
                console.log("LOSE!")
                cpuWin();
            }
            break;
        case 2: //cpu paper selection
            if(cpuChoice == 1){
                console.log("WIN!")
                playerWin();
            }
            if(cpuChoice == 2){
                console.log("DRAW!")
                gameDraw();
            }
            if(cpuChoice == 3){
                console.log("LOSE!")
                cpuWin();
            }
            if(cpuChoice == 4){
                console.log("LOSE!")
                cpuWin();
            }
            if(cpuChoice == 5){
                console.log("WIN!")
                playerWin();
            }
            break;
        case 3: //cpu scissors selection
            if(cpuChoice == 1){
                console.log("LOSE!")
                cpuWin();
            }
            if(cpuChoice == 2){
                console.log("WIN!")
                playerWin();
            }
            if(cpuChoice == 3){
                console.log("DRAW!")
                gameDraw();
            }
            if(cpuChoice == 4){
                console.log("WIN!")
                playerWin();
            }
            if(cpuChoice == 5){
                console.log("LOSE!")
                cpuWin();
            }
            break;
        case 4: //cpu lizard selection
            if(cpuChoice == 1){
                console.log("LOSE!")
                cpuWin();
            }
            if(cpuChoice == 2){
                console.log("WIN!")
                playerWin();
            }
            if(cpuChoice == 3){
                console.log("LOSE!")
                cpuWin();
            }
            if(cpuChoice == 4){
                console.log("DRAW!")
                gameDraw();
            }
            if(cpuChoice == 5){
                console.log("WIN!")
                playerWin();
            }
            break;
        case 5: //cpu spock selection
            if(cpuChoice == 1){
                console.log("WINS!")
                playerWin();
            }
            if(cpuChoice == 2){
                console.log("LOSE!")
                cpuWin();
            }
            if(cpuChoice == 3){
                console.log("WIN!")
                playerWin();
            }
            if(cpuChoice == 4){
                console.log("LOSE!")
                cpuWin();
            }
            if(cpuChoice == 5){
                console.log("DRAW!")
                gameDraw();
            }
            break;
        }
}




