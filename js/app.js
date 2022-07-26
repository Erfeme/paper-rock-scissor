let computerPoints = 0;
let playerPoints = 0;
const btn = document.querySelectorAll("button");        //Save all the Buttons in a Node
const res = document.querySelector('.resultadoJugador')


function getComputerChoice(){                           //This function returns the decision made by the computer
    let seleccion = Math.floor((Math.random() * 3));    //Generates a random number between 0 and 2

    items = ["piedra","papel","tijeras"];               //Array containing the computer's options
    return items[seleccion]                             //Take the random number and returns the option in that array's index
}

const roundWinner=(playerSelection,computerSelection)=>{
    
    if(playerSelection == "piedra" && computerSelection == "piedra"){
        return(`Empate! la computadora ha seleccionado ${computerSelection}y el jugador ha seleccionado ${playerSelection}\n Computadora ${computerPoints} Jugador ${playerPoints}`);
    } else if(playerSelection == "piedra" && computerSelection == "tijeras"){
        playerPoints=+1;
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "piedra" && computerSelection == "papel"){
        computerPoints=+1;
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "papel" && computerSelection == "piedra"){
        playerPoints=+1;
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "papel" && computerSelection == "papel"){
        return(`Empate! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "papel" && computerSelection == "tijeras"){
        computerPoints=+1;
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "tijeras" && computerSelection == "piedra"){
        computerPoints =+1;
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "tijeras" && computerSelection == "papel"){
        playerPoints =+ 1;
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }else if(playerSelection == "tijeras" && computerSelection == "tijeras"){
        return(`Empate! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection} \n Computadora ${computerPoints} Jugador ${playerPoints}`);
    }
}

function playRound(selection){

    const playerSelection = selection.target.innerText.toLowerCase();
    const computerSelection = getComputerChoice();
    const winner= roundWinner(playerSelection,computerSelection);
    res.innerText = winner;
    
}

btn.forEach(item=> {                                    //For each node element Do
    item.addEventListener('click',(e)=>{                //Add an Event Listener for a click on every button
        e.stopPropagation()                             //Don't compute clicks on other elements
        let result = playRound(e);                      //Call the playRound Function
    })
});