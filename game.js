const gameUi = document.querySelector(".game-ui");
const btns = document.querySelectorAll(".game-ui button");
const userScoreTable = document.querySelector("#userScore span");
const computerScoreTable = document.querySelector("#computerScore span");
const userSelection = document.querySelector("#userSelection span");
const computerSelection = document.querySelector("#computerSelection span");
const textLog = document.querySelector(".textLog span");
const container = document.querySelector(".container");

btns.forEach((btn) => {
    btn.addEventListener("mouseout", () => {
        btn.classList.remove("selected");
        btn.classList.toggle("hover");
    });
    btn.addEventListener("mousedown", () => {
        btn.classList.toggle("selected");
    });
    btn.addEventListener("mouseup", () => {
        btn.classList.toggle("selected");
    });
    btn.addEventListener("mouseover", () => {
        btn.classList.toggle("hover");
    });
})

function getComputerChoice() {
    let val = Math.floor(Math.random() * 3);
    let computerChoice = val === 0 ? "rock" :
    val === 1 ? "paper" :
    val === 2 ? "scissors" : null ;
    return computerChoice;  
}

function playGame() {
    let game = "started";
    let humanScore = 0;
    let computerScore = 0;
    computerScoreTable.textContent = computerScore;
    userScoreTable.textContent = humanScore;
    userSelection.textContent = "";
    computerSelection.textContent = "";
    textLog.textContent = "";

    btns.forEach((btn) => {
            btn.addEventListener ("click", () => {
                if (game === "started") { 
                    let human = btn.getAttribute("id");
                    let computer = getComputerChoice();

                    console.clear();
                    console.log("You chose " + human);
                    console.log("Computer chose " + computer);

                    userSelection.textContent = human.toUpperCase();
                    computerSelection.textContent = computer.toUpperCase();

                    if (human === computer) {
                        console.log("It's a draw!");
                        textLog.textContent = "It's a draw!";
                    } else if ((human === "rock" && computer === "scissors") || 
                    (human === "scissors" && computer === "paper") ||
                    (human === "paper" && computer === "rock")) {
                        console.log("You win this round!");
                        textLog.textContent = "You win this round!";
                        humanScore += 1;
                    } else {
                        console.log("You lose this round...");
                        textLog.textContent = "You lose this round...";
                        computerScore += 1;
                    }

            console.log("You " + humanScore + " | Computer " + computerScore);
            computerScoreTable.textContent = computerScore;
            userScoreTable.textContent = humanScore;
            
            if (humanScore === 5) {
                game = "end";
                textLog.textContent = "You WON the game!";
                const newGame = document.createElement("button");
                newGame.textContent = "New game";
                newGame.setAttribute("id", "newGame");
                container.appendChild(newGame);
                newGame.addEventListener("click", () => {
                    newGame.remove();
                    playGame();
                });
            } else if (computerScore === 5) {
                game = "end";
                textLog.textContent = "You LOST the game...";
                const newGame = document.createElement("button");
                newGame.textContent = "New game";
                newGame.setAttribute("id", "newGame");
                container.appendChild(newGame);
                newGame.addEventListener("click", () => {
                    newGame.remove();
                    playGame();
                });
            }}
            
    })}); 
}
playGame()