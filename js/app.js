function getComputerChoice(){
    let seleccion = Math.floor((Math.random() * 3));

    items = ["piedra","papel","tijeras"];
    return items[seleccion]
}

function getPlayerChoice(){
    let playerSelection = prompt('Escribe Piedra, papel o tijeras').toLowerCase();
    return playerSelection;
}