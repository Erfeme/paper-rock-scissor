function getComputerChoice(){
    let seleccion = Math.floor((Math.random() * 3));

    items = ["piedra","papel","tijeras"];
    return items[seleccion]
}

function getPlayerChoice(){
    let playerSelection = prompt('Escribe Piedra, papel o tijeras').toLowerCase();
    return playerSelection;
}

function playRound(){
    
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()
    
    if(playerSelection == "piedra" && computerSelection == "piedra"){
        return(`Empate! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    } else if(playerSelection == "piedra" && computerSelection == "tijeras"){
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "piedra" && computerSelection == "papel"){
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "papel" && computerSelection == "piedra"){
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "papel" && computerSelection == "papel"){
        return(`Empate! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "papel" && computerSelection == "tijeras"){
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "tijeras" && computerSelection == "piedra"){
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "tijeras" && computerSelection == "papel"){
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "tijeras" && computerSelection == "tijeras"){
        return(`Empate! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }

}

