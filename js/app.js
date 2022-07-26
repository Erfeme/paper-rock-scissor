let computerPoints = 0;

let playerPoints = 0;

const btn = document.querySelectorAll("button");        //Save all the Buttons in a Node
const res = document.querySelector('.resultadoJugador')


function getComputerChoice(){                           //This function returns the decision made by the computer
    let seleccion = Math.floor((Math.random() * 3));    //Generates a random number between 0 and 2

    items = ["rock","paper","scissors"];               //Array containing the computer's options
    return items[seleccion]                             //Take the random number and returns the option in that array's index
}

const roundWinner=(playerSelection,computerSelection)=>{
    
    if(playerSelection == "rock" && computerSelection == "rock"){
        return(`Empate! la computadora ha seleccionado ${computerSelection}y el jugador ha seleccionado ${playerSelection}\n Computadora ${computerPoints} Jugador ${playerPoints}`);
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerPoints++;
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        computerPoints++;
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        playerPoints++;
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "paper" && computerSelection == "paper"){
        return(`Empate! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerPoints++;
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerPoints ++;
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerPoints ++;
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "scissors" && computerSelection == "scissors"){
        return(`Empate! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }
}

function playRound(selection){

    const playerSelection = selection.target.innerText.toLowerCase();
    const computerSelection = getComputerChoice();
    const winner= roundWinner(playerSelection,computerSelection);
    res.innerText = winner;

    if (playerPoints == 5){
        res.innerText = "El jugador ha resultado victorioso";
        btn.forEach(item=>{
            item.disabled = true;    
        })
    }else if(computerPoints == 5){
        res.innerText = "La computadora ha mostrado su superioridad al humano";
        btn.forEach(item=>{
            item.disabled = true;    
        })
    }
}

btn.forEach(item=> {                                    //For each node element Do
    item.addEventListener('click',(e)=>{                //Add an Event Listener for a click on every button
        e.stopPropagation()                             //Don't compute clicks on other elements
        let result = playRound(e);                      //Call the playRound Function
    })
});