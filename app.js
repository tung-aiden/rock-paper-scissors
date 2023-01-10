
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    
    if (num === 0) {
        return("rock");
    } else if (num === 1) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return("You Tie! Paper ties with Paper");
        } else if (computerSelection === "rock") {
            return("You Win! Paper beats Rock");
        } else {
            return("You Lose! Scissors beats Paper");
        }
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return("You Lose! Paper Beats Rock");
        } else if (computerSelection === "rock") {
            return("You Tie! Rock ties with Rock");
        } else {
            return("You Win! Rock beats Scissors");
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return("You Win! Scissors beats Paper");
        } else if (computerSelection === "rock") {
            return("You Lose! Rock beats Scissors");
        } else {
            return("You Tie! Scissors ties with Scissors");
        }
    }
}

let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();

if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
    console.log(playRound(playerSelection, getComputerChoice()))
} else {
    console.log("Invalid Input")
}


