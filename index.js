function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let option = getRandomInt(3);

    switch (option) {
        case 0:
            option = "rock";
            break;
        case 1:
            option = "paper";
            break;
        case 2:
            option = "scissors";
            break;
    }
    return (option);
}

function playRound() {
    let computer = getComputerChoice();
    console.log(computer);
    let human = selection;
    console.log(human);

    if (computer.toLowerCase() == "rock") {
        if (human.toLowerCase() == "scissors") {
            return "computer";
        } else if (human.toLowerCase() == "paper") {
            return "human";
        } else {
            return "draw";
        }
    }

    if (computer.toLowerCase() == "paper") {
        if (human.toLowerCase() == "rock") {
            return "computer";
        } else if (human.toLowerCase() == "scissors") {
            return "human";
        } else {
            return "draw";
        }
    }

    if (computer.toLowerCase() == "scissors") {
        if (human.toLowerCase() == "paper") {
            return "computer";
        } else if (human.toLowerCase() == "rock") {
            return "human";
        } else {
            return "draw";
        }
    }
}

function playGame() {
    let computerWins = 0;
    let humanWins = 0;

    for (let cont = 0; cont < 5; cont++) {
        let result = playRound();
        if (result.toLowerCase() == "computer") {
            computerWins++;
            console.log("Computer Wins" + " " + "Computer:" + " " + computerWins + " " + "Human:" + " " + humanWins);
        } else if (result.toLowerCase() == "human") {
            humanWins++;
            console.log("Human Wins" + " " + "Computer:" + " " + computerWins + " " + "Human:" + " " + humanWins);
        } else {
            console.log("Draw" + " " + "Computer:" + " " + computerWins + " " + "Human:" + " " + humanWins);
        }
    }

    if (computerWins > humanWins) {
        console.log("Coputer win");
    } else {
        console.log("Human win");
    }

}

// Events

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener("click", playRound);
    });
})



