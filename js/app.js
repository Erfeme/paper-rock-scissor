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
        playerPoints=+1;
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "piedra" && computerSelection == "papel"){
        computerPoints=+1;
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "papel" && computerSelection == "piedra"){
        playerPoints=+1;
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "papel" && computerSelection == "papel"){
        return(`Empate! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "papel" && computerSelection == "tijeras"){
        computerPoints=+1;
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "tijeras" && computerSelection == "piedra"){
        computerPoints =+1;
        return(`Gana la computadora! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "tijeras" && computerSelection == "papel"){
        playerPoints =+ 1;
        return(`Gana el jugador! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }else if(playerSelection == "tijeras" && computerSelection == "tijeras"){
        return(`Empate! la computadora ha seleccionado ${computerSelection} y el jugador ha seleccionado ${playerSelection}`)
    }
}

function game(){

    let computerPoints = 0;
    let playerPoints = 0;

    for (let i = 0; i < 5; i++){

    }

}