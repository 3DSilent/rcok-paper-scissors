function getComputerChoice() {
    let val = Math.floor(Math.random() * 3);
    let computerChoice = val === 0 ? "rock" :
    val === 1 ? "paper" :
    val === 2 ? "scissors" : null ;
    return computerChoice;  
}

function getHumanChoice() {
    let choice
    choice = prompt("Make your choice.", "rock/paper/scissors");
    choice = choice.toLowerCase();
    choice = choice.trim();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
         choice = prompt("Enter a valid answer.", "rock, paper, scissors");
         choice = choice.toLowerCase();
         choice = choice.trim();
        }   
    }
    let humanChoice = choice;
    return humanChoice;
}

