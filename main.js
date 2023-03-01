
const CHOICES = ["rock", "paper", "scissors"];
const win_options = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
}

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

function playRound(playerSelection, computerSelection) {
    console.log("Player = " + playerSelection);
    console.log("Com = " + computerSelection);
    let flag = false;
    for (let i = 0; i < CHOICES.length; i++) {
        if (playerSelection === CHOICES[i]) {
            flag = true;
        }
    }
    if (!flag) {
        return "[Error] There is a problem from your input."
    } else {
        if (playerSelection === computerSelection) {
            return "TIE";
        } else {
            if(win_options[playerSelection] === computerSelection){
                return "You Win!! " + playerSelection + " beats " + computerSelection;
            } else {
                return "You Lose!! " + playerSelection + " beats " + computerSelection;
            }
        }
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()));