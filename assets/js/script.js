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
        alert("This game is a tie. Please try again");
    }

    else if (playerChoice === "rock") {
        if (computerChoice === 'paper') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else {
            alert(`Congratulations you have won this game. The computer chose ${computerChoice}.`);
            incrementPlayerScore();
        }
    }

    else if (playerChoice === "paper") {
        if (computerChoice === 'scissors') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else {
            alert(`Congratulations you have won this game. The computer chose ${computerChoice}.`);
            incrementPlayerScore();
        }
    }

    else if (playerChoice === "scissors") {
        if (computerChoice === 'rock') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else {
            alert(`Congratulations you have won this game. The computer chose ${computerChoice}.`);
            incrementPlayerScore();
        }
    }
}

/**
 * This function is used to show and increment the score of the player.
 */

function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("player-count").innerText);
    document.getElementById("player-count").innerText = ++oldScore;
}

/**
 * This function is used to show and increment the score of the computer.
 */

function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-count").innerText);
    document.getElementById("computer-count").innerText = ++oldScore;
}

function showInstructions() {

}