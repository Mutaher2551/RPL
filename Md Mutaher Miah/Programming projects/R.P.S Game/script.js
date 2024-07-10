const options = ['rock', 'paper', 'scissors'];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) return 'It\'s a tie!';
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function playerChoice(playerSelection) {
    const computerSelection = computerChoice();
    const result = determineWinner(playerSelection, computerSelection);

    document.getElementById('roundResult').innerText = `You chose ${playerSelection}, the computer chose ${computerSelection}. ${result}`;
    document.getElementById('options').style.pointerEvents = 'none';
    document.getElementById('result').style.display = 'block';
}

function resetGame() {
    document.getElementById('options').style.pointerEvents = 'auto';
    document.getElementById('result').style.display = 'none';
    document.getElementById('roundResult').innerText = '';
}