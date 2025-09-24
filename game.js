function getComputerChoice() {
    let val = Math.floor(Math.random() * 3);
    let computerChoice = val === 0 ? "rock" :
    val === 1 ? "paper" :
    val === 2 ? "scissors" : null ;
    return computerChoice;  
}

function getHumanChoice() {
    let choice = prompt("Make your choice.", "rock, paper, scissors");
    return humanChoice;
}

