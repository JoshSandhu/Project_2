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
    let result = document.getElementsByClassName("results");
    let playerScore = 0;
    let computerScore = 0;
    let playerScoreBoard = document.getElementsByClassName("player-count");
    let computerScoreBoard = document.getElementsByClassName("computer-count")
    computerChoice = computerOptions[choiceNum];

    if (playerChoice === computerChoice) {
        result.innerText = "This game has tied. No points awarded!";
    }

    else if (playerChoice === "rock") {
        if (computerChoice === 'paper') {
            result.innerHTML = "The computer has won this round with paper. Please try again.";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.innerHTML = "Congratulations you have won this round. Computer played scissors.";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }

    else if (playerChoice === "paper") {
        if (computerChoice === 'scissors') {
            result.innerHTML = "The computer has won this round with scissors. Please try again.";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.innerHTML = "Congratulations you have won this round. Computer played rock.";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }

    else if (playerChoice === "scissors") {
        if (computerChoice === 'rock') {
            result.innerHTML = "The computer has won this round with rock. Please try again.";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            result.innerHTML = "Congratulations you have won this round. Computer played paper.";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}   

function incrementScore() {

}

function showInstructions() {

}