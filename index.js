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

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    return (choice);
}


function playRound() {
    let computer = getComputerChoice();
    console.log(computer);
    let human = getHumanChoice();
    console.log(human);

    if (computer.toLowerCase() == "rock") {
        if (human.toLowerCase() == "scissors") {
            console.log("Computer wins");
        } else if (human.toLowerCase() == "paper") {
            console.log("Human wins");
        } else {
            console.log("Draw")
        }
    }

    if (computer.toLowerCase() == "paper") {
        if (human.toLowerCase() == "rock") {
            console.log("Computer wins");
        } else if (human.toLowerCase() == "scissors") {
            console.log("Human wins");
        } else {
            console.log("Draw")
        }
    }

    if (computer.toLowerCase() == "scissors") {
        if (human.toLowerCase() == "paper") {
            console.log("Computer wins");
        } else if (human.toLowerCase() == "rock") {
            console.log("Human wins");
        } else {
            console.log("Draw")
        }
    }
}

playRound();