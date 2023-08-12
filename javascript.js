function getComputerChoice() {
    //Make a variable to show the options available
    var options = ["Rock", "Paper", "Scissors"];
    //Randomly choose one of the three
    var choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if(player == "rock" && computer == "scissors") {
        return("You Win! " + player + " beats " + computer);
    }
    else if(player == "paper" && computer == "rock") {
        return("You Win! " + player + " beats " + computer);
    }
    else if(player == "scissors" && computer == "paper") {
        return("You Win! " + player + " beats " + computer);
    }
    else if(player == computer) {
        return("You Tie! both you and the computer selected  " + computer);
    }
    else {
        return("You Lose! Good day sir! " + computer + " beats " + player);
    }
}



function game() {
    for(let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Please enter rock, paper or scissors:");
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();