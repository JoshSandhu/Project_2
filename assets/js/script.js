// Logic of game inside
let game = () => {
    let playerScore = 0;
    let computerScore = 0;
}

// Function for
let playGame = () => {
    let rockBtn = document.getElementsByClassName('rock');
    let paperBtn = document.getElementsByClassName('paper');
    let scissorBtn = document.getElementsByClassName('scissors');
    let playerOptions = [rockBtn, paperBtn, scissorBtn];
    let computerOptions = ['rock', 'paper', 'scissors']

    // Function to start playing
    playerOptions.forEach(option => {
        option.addEventListener('click', function() {

            let choiceNumber = Math.floor(Math.random()*5);
            let computerChoice = computerOptions[choiceNumber];

            // Function for winner
            winner(this.innerText,computerChoice)
        })
    })
}

// Function to decide winner
let winner = (player, computer) => {
    let result = document.getElementById('result');
    let playerScoreBoard = document.getElementsByClassName('player-count');
    let computerScoreBoard = document.getElementsByClassName('computer-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
        result.textContent = 'You have tied.'
    }

    else if (player == 'rock') {
        if (computer == 'paper') {
            result.textContent = 'Computer has won with Paper';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
        
    }
}