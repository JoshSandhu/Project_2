// Waiting for the DOM to finish loading
// Get the button elements and add even listeners

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === 'restart') {
                restartGame();
            } else if (this.getAttribute("data-type") === 'instructions') {
                showInstructions();
            } else {
                let playerChoice = this.getAttribute("data-type");
                runGame(playerChoice);
            }
        });
    }
});

/**
 * The main game loop called when the script is loaded as well
 * as in between games
 */

function runGame(playerChoice) {
    let choiceNum = Math.floor(Math.random() * 5);
    let computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let computerChoice = computerOptions[choiceNum];
    let games = document.getElementById("games-done").innerText;

    if(games == 10) {
        endGame();
    }

// Players choice matches the computer choice

    else if (playerChoice === computerChoice) {
        tieGame(computerChoice);
    }

// Players choice of Rock

    else if (playerChoice === "rock") {
        if (computerChoice === 'paper') {
            incrementComputerScore(computerChoice);
        } else if (computerChoice === 'spock') {
            incrementComputerScore(computerChoice);
        } else {
            incrementPlayerScore(computerChoice);
        }
    }

// Players choice of Paper

    else if (playerChoice === "paper") {
        if (computerChoice === 'scissors') {
            incrementComputerScore(computerChoice);
        } else if (computerChoice === 'lizard') {
            incrementComputerScore(computerChoice);
        } else {
            incrementPlayerScore(computerChoice);
        }
    }

// Players choice of Scissors

    else if (playerChoice === "scissors") {
        if (computerChoice === 'rock') {
            incrementComputerScore(computerChoice);
        } else if (computerChoice === 'spock') {
            incrementComputerScore(computerChoice);
        } else {
            incrementPlayerScore(computerChoice);
        }
    }

// Players choice of Lizard

    else if (playerChoice === "lizard") {
        if (computerChoice === 'scissors') {
            incrementComputerScore(computerChoice);
        } else if (computerChoice === 'rock') {
            incrementComputerScore(computerChoice);
        } else {
            incrementPlayerScore(computerChoice);
        }
    }

// Players choice of Spock

    else if (playerChoice === "spock") {
        if (computerChoice === 'paper') {
            incrementComputerScore(computerChoice);
        } else if (computerChoice === 'lizard') {
            incrementComputerScore(computerChoice);
        } else {
            incrementPlayerScore(computerChoice);
        }
    }
}

/**
 * This function is used to show and increment the score of the player.
 */

function incrementPlayerScore(computerChoice) {
    let oldScore = parseInt(document.getElementById("player-count").innerText);
    let games = parseInt(document.getElementById("games-done").innerText);
    document.getElementById("player-count").innerText = ++oldScore;
    document.getElementById("games-done").innerText = ++games;
    document.getElementById("game-results").innerHTML =  `Congratulations you have won this game. The computer chose ${computerChoice}.`;
}

/**
 * This function is used to show and increment the score of the computer.
 */

function incrementComputerScore(computerChoice) {
    let oldScore = parseInt(document.getElementById("computer-count").innerText);
    let games = parseInt(document.getElementById("games-done").innerText);
    document.getElementById("computer-count").innerText = ++oldScore;
    document.getElementById("games-done").innerText = ++games;
    document.getElementById("game-results").innerHTML = `Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`;
}

/**
 * This function is used once 10 games have been completed to state the
 * winner and ask to restart.
 */
function endGame() {
    let player = document.getElementById("player-count").innerText;
    let computer = document.getElementById("computer-count").innerText;

    if (player == computer) {
        document.getElementById("game-results").innerHTML = "This round of games was a tie. Please press Restart to play again.";
    } else if (player > computer) {
        document.getElementById("game-results").innerHTML = "Congratulations you have won this round of games. Please press Restart to play again.";
    } else {
        document.getElementById("game-results").innerHTML = "Ahhh unfortunatly the computer has won this round of games. Please press Restart to play again.";
    }
}

function restartGame() {
    document.getElementById("games-done").innerText = "0";
    document.getElementById("computer-count").innerText = "0";
    document.getElementById("player-count").innerText = "0";
}

function showInstructions() {
    alert("Welcome to our Rock, Paper, Scissors, Lizard and Spock game. The rules are simple: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors. Select your choice to start the game today.");
}