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
        })
    }
})

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
        alert("This game is a tie. Please try again");
    }

// Players choice of Rock

    else if (playerChoice === "rock") {
        if (computerChoice === 'paper') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else if (computerChoice === 'spock') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else {
            alert(`Congratulations you have won this game. The computer chose ${computerChoice}.`);
            incrementPlayerScore();
        }
    }

// Players choice of Paper

    else if (playerChoice === "paper") {
        if (computerChoice === 'scissors') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else if (computerChoice === 'lizard') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else {
            alert(`Congratulations you have won this game. The computer chose ${computerChoice}.`);
            incrementPlayerScore();
        }
    }

// Players choice of Scissors

    else if (playerChoice === "scissors") {
        if (computerChoice === 'rock') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else if (computerChoice === 'spock') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else {
            alert(`Congratulations you have won this game. The computer chose ${computerChoice}.`);
            incrementPlayerScore();
        }
    }

// Players choice of Lizard

    else if (playerChoice === "lizard") {
        if (computerChoice === 'scissors') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else if (computerChoice === 'rock') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else {
            alert(`Congratulations you have won this game. The computer chose ${computerChoice}.`);
            incrementPlayerScore();
        }
    }

// Players choice of Spock

    else if (playerChoice === "spock") {
        if (computerChoice === 'paper') {
            alert(`Ow noo . . . The computer has won this game with ${computerChoice}. Please try again.`);
            incrementComputerScore();
        } else if (computerChoice === 'lizard') {
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
    let games = parseInt(document.getElementById("games-done").innerText);
    document.getElementById("player-count").innerText = ++oldScore;
    document.getElementById("games-done").innerText = ++games;
}

/**
 * This function is used to show and increment the score of the computer.
 */

function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-count").innerText);
    let games = parseInt(document.getElementById("games-done").innerText);
    document.getElementById("computer-count").innerText = ++oldScore;
    document.getElementById("games-done").innerText = ++games;
}

/**
 * This function is used once 10 games have been completed to state the
 * winner and ask to restart.
 */
function endGame() {
    let player = document.getElementById("player-count").innerText;
    let computer = document.getElementById("computer-count").innerText;

    if (player == computer) {
        alert("This round of games was a tie. Please press Restart to play again.")
    } else if (player > computer) {
        alert("Congratulations you have won this round of games. Please press Restart to play again.");
    } else {
        alert("Ahhh unfortunatly the computer has won this round of games. Please press Restart to play again.");
    }
}

function restartGame() {
    document.getElementById("games-done").innerText = "0";
    document.getElementById("computer-count").innerText = "0";
    document.getElementById("player-count").innerText = "0";
}

function showInstructions() {

}