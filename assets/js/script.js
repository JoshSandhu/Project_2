// Waiting for the DOM to finish loading
// Get the button elements and add even listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === 'restart') {
                alert("You clicked Restart!");
            } else if (this.getAttribute("data-type") === 'instructions') {
                showInstructions();
            } else {
                let playerChoice = this.getAttribute("data-type");
                runGame(playerChoice);
            }
        })
    }
})

/**
 * The main game loop called when the script is loaded as well
 * as in between games
 */

function runGame(playerChoice) {
    let choiceNum = Math.floor(Math.random() * 3);
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerChoice = computerOptions[choiceNum];
    let winner = ['player', 'computer', 'tie'];

    if (playerChoice === computerChoice) {
        winner = 'tie';
    }

    else if (playerChoice === "rock") {
        if (computerChoice === 'paper') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }

    else if (playerChoice === "paper") {
        if (computerChoice === 'scissors') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }

    else if (playerChoice === "scissors") {
        if (computerChoice === 'rock') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }
    incrementScore(winner, computerChoice);
    console.log(winner);
}

/**
 * This function is used to keep track of the score depending on
 * the winner of the previous game.
 */

function incrementScore(winner, computerChoice) {
    let result = document.getElementsByClassName("results");
    let playerScore = 0;
    let computerScore = 0;
    let playerScoreBoard = document.getElementsByClassName("player-count");
    let computerScoreBoard = document.getElementsByClassName("computer-count");

    if (winner === 'player') {
        result.innerHTML = `Congratulations you have won this game! The computer played ${computerChoice}`;
        playerScore++;
        playerScoreBoard.innerHTML = playerScore;
    }
    
    else if (winner === 'computer') {
        result.innerHTML = `Ohh no! You lost this game. The computer played ${computerChoice} please try again.`;
        computerScore++;
        computerScoreBoard.innerHTML = computerScore;
    }

    else {
        result.innerHTML = `This game was a tie and no points were awarded. Computer played ${computerChoice}`
    }
    console.log(result);
}

function showInstructions() {

}