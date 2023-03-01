
const CHOICES = ["rock", "paper", "scissors"];
const ROUND = 5;
const win_options = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
}

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

function playRound(ps, cs) {
    console.log("Player = " + ps);
    console.log("Com = " + cs);
    if (ps === ps) {
        return "TIE";
    } else {
        if (win_options[ps] === cs) {
            return "You Win!! " + ps + " beats " + cs;
        } else {
            return "You Lose!! " + ps + " beats " + cs;
        }
    }
}

function game() {
    let round = 0;
    let roundField = document.getElementById("round");
    for (let i = 0; i < ROUND; i++) {
        round = i + 1;
        roundField.innerHTML = round;

    }
}

let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

game();