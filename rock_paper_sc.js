let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "No One Wins!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return "YOU WIN!";
    } else {
        computerScore++;
        return "COMPUTER WINS!";
    }
}

function updateScoreDisplay() {
    document.getElementById('playerScoreDisplay').textContent = playerScore;
    document.getElementById('computerScoreDisplay').textContent = computerScore;
}

function updateChoicesDisplay(playerChoice, computerChoice) {
    document.getElementById('playerDisplay').textContent = 'PLAYER: ' + playerChoice.toUpperCase();
    document.getElementById('computerDisplay').textContent = 'COMPUTER: ' + computerChoice.toUpperCase();
}

function play(playerChoice) {
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    updateScoreDisplay();
    updateChoicesDisplay(playerChoice, computerChoice);
    document.getElementById('resultDisplay').textContent = result;
}
