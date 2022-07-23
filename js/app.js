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
    const player = getPlayerChoice()
    const computer = getComputerChoice()
    console.log(player,computer)
    return
}

