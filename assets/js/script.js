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
    let result = document.getElementById("result");
    computerChoice = computerOptions[choiceNum];
    pickWinner(playerChoice, computerChoice);
}   

function pickWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        result.textContent = "This game has tied. No points awarded!";
    }

    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            result.textContent = `The computer has won this round with paper. Please try again.`;
        } else {
            winner = "player";
        }
    }

    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            result.textContent = `The computer has won this round with scissors. Please try again.`;
        } else {
            winner = "player";
        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            result.textContent = `The computer has won this round with rock. Please try again.`;
        } else {
            winner = "player";
        }
    }
}

function incrementScore() {

}