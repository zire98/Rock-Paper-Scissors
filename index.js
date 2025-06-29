let computerWins = 0;
let humanWins = 0;

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

function playRound(human, computer) {

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

function playGame(e) {

    let human = e.target.id;
    let computer = getComputerChoice();

    let result = playRound(human, computer);

    if (humanWins === 5 || computerWins === 5) {
        return false;
    }
    result.toLowerCase() == "computer" ? computerWins++ : humanWins++;

    seeResult(computerWins, humanWins);

    if (computerWins === 5 || humanWins === 5) {
        showWinner(result);
    }

}

function showWinner(result) {
    const container = document.querySelector("#score");
    let winner = document.createElement("p");
    winner.textContent = `The winner is ${result}.`
    container.appendChild(winner);
}

function seeResult(computerWins, humanWins) {
    let points = document.querySelector("#points");
    if (!points) {
        const container = document.querySelector("#score");
        let result = document.createElement("p");
        result.id = "points";
        result.textContent = `Computer wins: ${computerWins} Player wins: ${humanWins}`;
        container.appendChild(result);
    } else {
        points.textContent = `Computer wins: ${computerWins} Player wins: ${humanWins}`
    }


}

// Events

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            playGame(e);
        })
    });
})



