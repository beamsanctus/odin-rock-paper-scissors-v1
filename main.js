
const CHOICES = ["rock", "paper", "scissors"];
const ROUND = 5;
const win_options = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
}


const roundField = document.getElementById("round");
const comSelectImg = document.getElementById("com-select");
const comImgBorder = document.getElementById("com-buttons")

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

let playerSelect, comSelect;

async function game() {
    let round = 0;
    for (let i = 0; i < ROUND; i++) {
        round = i + 1;
        roundField.innerHTML = round;
        playerSelect = await getUserInput();
        console.log("Round: " + round + " Player Select: " + playerSelect);

        comImgBorder.style.border = "0px solid #FF0000";
        comSelect = await getComInput();
        console.log("Com Select= " + comSelect);
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

            const clickedImageId = event.target.id;
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


async function selectingAnim() {

    return new Promise(resolve => {
        resolve();
    });
}


async function getComInput() {
    return new Promise(resolve => {
        let result = ""
        let randomChoice;
        let randomNum = Math.floor(Math.random() * 20) + 10;
        console.log("random: " + randomNum);
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
                    resolve(comSelect);
                }
            }, 100)
        })(randomNum);
    });
}


game();