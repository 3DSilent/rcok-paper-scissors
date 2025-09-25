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

function playGame() {
    function playRound() {
        let human = getHumanChoice();
        let computer = getComputerChoice();
        console.clear();
        console.log("You chose " + human);
        console.log("Computer chose " + computer);
        if (human === computer) {
            console.log("It's a draw!");
            console.log("You " + humanScore + " | Computer " + computerScore);
        } else if ((human === "rock" && computer === "scissors") || 
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")) {
            console.log("You win this round!");
            humanScore += 1;
            console.log("You " + humanScore + " | Computer " + computerScore);
        } else {
            console.log("You lose this round...");
            computerScore += 1;
            console.log("You " + humanScore + " | Computer " + computerScore);
        }
    }
    let humanScore = 0;
    let computerScore = 0;
    for (;humanScore < 5 && computerScore < 5;) {
        playRound();
    }
    console.log(humanScore === 5 ? "You WON the game!" : "You LOST the game...");
}
playGame()