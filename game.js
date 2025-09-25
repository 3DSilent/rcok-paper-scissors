let humanScore = 0;
let computerScore = 0;

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
         choice = prompt("Enter a valid answer.", "rock/paper/scissors");
         choice = choice.toLowerCase();
         choice = choice.trim();
        }   
    }
    return choice;
}

function playRound() {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    console.log("You chose " + human)
    console.log("Computer chose " + computer)
    if (human === computer) {
        console.log("It's a draw!")
    } else if ((human === "rock" && computer === "scissors") || 
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock")) {
        console.log("You win this round!");
        humanScore += 1;
        console.log("You " + humanScore + " | Computer " + computerScore)

    } else {
        console.log("You lose this round...")
        computerScore += 1
        console.log("You " + humanScore + " | Computer " + computerScore)
    }
}

