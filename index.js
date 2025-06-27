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
    console.log(option);
}

getComputerChoice();

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors");
    console.log(choice);
}

getHumanChoice();