
const CHOICES = ["rock", "paper", "scissors"];
const ROUND = 5;
const win_options = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
}

let playerScore = 0;
let comScore = 0;
const roundField = document.getElementById("round");
const comSelectImg = document.getElementById("com-select");
const comImgBorder = document.getElementById("com-buttons")
const playerBoard = document.getElementById("player-board");
const comBoard = document.getElementById("com-board");
const playerScoreField = document.getElementById("player-score");
const comScoreField = document.getElementById("com-score");
const imgButton = document.getElementsByClassName("img-button");
const winnerImg = document.getElementById("winner");
const resultQuote = document.getElementById("result-quote");

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

function playRound(ps, cs) {
    console.log("Player = " + ps);
    console.log("Com = " + cs);
    if (ps === cs) {
        return "tie";
    } else {
        if (win_options[ps] === cs) {
            return "player";
        } else {
            return "com";
        }
    }
}

let playerSelect, comSelect;

async function game() {
    let round = 0;
    roundField.innerHTML = round + "\/5";
    for (let i = 0; i < ROUND; i++) {
        playerSelect = await getUserInput();
        round++;
        roundField.innerHTML = round + "\/5";
        comImgBorder.style.border = "0px solid #FF0000";
        comImgBorder.style.padding = "15px";
        comSelect = await getComInput();

        result = playRound(playerSelect, comSelect);
        console.log("result: " + result);
        switch (result) {
            case 'tie':
                playerBoard.style.backgroundColor = "#aabbcc";
                comBoard.style.backgroundColor = "#aabbcc";
                break;
            case 'player':
                playerBoard.style.backgroundColor = "#aabbcc";
                playerScore++;
                playerScoreField.innerHTML = playerScore;
                break;
            case 'com':
                comBoard.style.backgroundColor = "#aabbcc";
                comScore++;
                comScoreField.innerHTML = comScore;
                break;
        }
    }

    document.getElementById("popup").style.display = "flex";
    if (playerScore === comScore) {
        //tie
        winnerImg.src = "images\/tie.png";
        resultQuote.innerHTML = "DRAW ..";
    } else if (playerScore > comScore) {
        //player wins
        winnerImg.src = "images\/player.png";
        resultQuote.innerHTML = "WIN !";
    } else {
        //com wins
        winnerImg.src = "images\/bot.png";
        resultQuote.innerHTML = "WIN !";
    }
}

async function getUserInput() {
    return new Promise(resolve => {
        const rockBtn = document.getElementById("rock");
        const paperBtn = document.getElementById("paper");
        const scissorsBtn = document.getElementById("scissors");
        rockBtn.addEventListener("click", eventHandler);
        paperBtn.addEventListener("click", eventHandler);
        scissorsBtn.addEventListener("click", eventHandler);


        function eventHandler(event) {
            rockBtn.removeEventListener("click", eventHandler);
            paperBtn.removeEventListener("click", eventHandler);
            scissorsBtn.removeEventListener("click", eventHandler);

            playerBoard.style.backgroundColor = "#ffffff";
            comBoard.style.backgroundColor = "#ffffff";

            const clickedImageId = event.target.id;
            for (let i = 0; i < imgButton.length; i++) {
                imgButton[i].style.border = "0px solid #FFFFFF";
                imgButton[i].style.padding = "10px";
            }

            event.target.style.border = "5px solid #ccccFF"
            event.target.style.padding = "5px";
            event.target.style.borderRadius = "50%";


            let userInput;
            switch (clickedImageId) {
                case "paper":
                    userInput = "paper";
                    break;
                case "rock":
                    userInput = "rock";
                    break;
                case "scissors":
                    userInput = "scissors";
                    break;
            }
            resolve(userInput);
        }
    });
}

async function getComInput() {
    return new Promise(resolve => {
        let result = ""
        let randomChoice;
        let randomNum = Math.floor(Math.random() * 15) + 15;
        (function myLoop(i) {
            setTimeout(function () {
                randomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
                imgSrc = "images\/" + randomChoice + "\.png"
                comSelectImg.src = imgSrc;
                if (--i) {
                    myLoop(i);
                } else {
                    let comSelect
                    comSelect = CHOICES[Math.floor(Math.random() * CHOICES.length)];
                    imgSrc = "images\/" + comSelect + "\.png"
                    comSelectImg.src = imgSrc;
                    comImgBorder.style.border = "5px solid #FF0000";
                    comImgBorder.style.padding = "10px";
                    resolve(comSelect);
                }
            }, 100)
        })(randomNum);
    });
}


game();