function computerPlay() {
    let gameArr = ["rock", "paper", "scissors"];   
    let choice = Math.floor(Math.random() * 3) + 1;
    return gameArr[choice - 1];
}

function playerPlay() {
    return window.prompt("Choose 'Rock', 'Paper', or 'Scissors'...").toLowerCase();
}


function playRound(playerSelection, computerSelection) {
    
    const container = document.querySelector('#results');
    container.hasChildNodes?? container.removeChild(result);
    
    const result = document.createElement('div');
    result.classList.add('result');
    result.textContent = "Player choice is " + playerSelection + " and Computer choice is " + computerSelection;
    container.appendChild(result);

    if (playerSelection == computerSelection) {
        drawCount += 1;
        if (computerWinCount < 5) {
            result.textContent += ", so this round is a draw. Total draws are " + drawCount;
        }
        else {
            result.textContent += ", so Computer won this round. Total Computer wins is " + computerWinCount + ", so Computer wins the game!";
        }
            container.appendChild(result);
    }
    else if(computerSelection == "rock" && playerSelection == "scissors") {
        computerWinCount += 1;
        if (computerWinCount < 5) {
            result.textContent += ", so Computer won this round. Total Computer wins is " + computerWinCount;
        }
        else {
            result.textContent += ", so Computer won this round. Total Computer wins is " + computerWinCount + ", so Computer wins the game!";
        }
            container.appendChild(result);
    }
    else if(computerSelection == "scissors" && playerSelection == "paper") {
        computerWinCount += 1;
        if (computerWinCount < 5) {
            result.textContent += ", so Computer won this round. Total Computer wins is " + computerWinCount;
        }
        else {
            result.textContent += ", so Computer won this round. Total Computer wins is " + computerWinCount + ", so Computer wins the game!";
        }
            container.appendChild(result);
    }
    else if(computerSelection == "paper" && playerSelection == "rock") {
        computerWinCount += 1;
        if (computerWinCount < 5) {
        result.textContent += ", so Computer won this round. Total Computer wins is " + computerWinCount;
        }
        else {
            result.textContent += ", so Computer won this round. Total Computer wins is " + computerWinCount + ", so Computer wins the game!";
        }
        container.appendChild(result);
    }
    else {
        playerWinCount += 1;
        if (playerWinCount < 5) {
        result.textContent += ", so Player won this round. Total Player wins is " + playerWinCount;
        }
        else {
            result.textContent += ", so Player won this round. Total Player wins is " + playerWinCount + ", so Player wins the game!";
        }
        container.appendChild(result);
    }
}


let drawCount = 0;
let computerWinCount = 0;
let playerWinCount = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //call playRound function with button.id as playerSelection
        playRound(button.id,computerPlay());
    });
});
