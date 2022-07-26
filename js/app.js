let computerPoints = 0;

let playerPoints = 0;

const btn = document.querySelectorAll(".action");        //Save all the Buttons in a Node
const res = document.querySelector('.resultadoTexto');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const playerPointsText = document.querySelector('.playerPoints');
const computerPointsText = document.querySelector('.computerPoints');
const reset = document.querySelector('.again');

btn.forEach(item=> {                                    //For each node element Do
    item.addEventListener('click',(e)=>{                //Add an Event Listener for a click on every button
        e.stopPropagation();                            //Don't compute clicks on other elements
        let result = playRound(e);                      //Call the playRound Function
    })
});

reset.addEventListener('click',(e)=>{
    e.stopPropagation();
    btn.forEach(item=>{
        item.disabled = false;
    })
    playerPoints = 0;
        computerPoints = 0;
        img1.src = "./images/prs.jpg"
        img2.src = "./images/prs.jpg"
        res.innerText = 'Who will win? Neurons or transistors? The first getting 5 points will earn the victory!'
        playerPointsText.innerText = 0;
        computerPointsText.innerText = 0;
        reset.disabled = true;
})

changePlayerImage=playerSelection=>{

    switch(playerSelection){
        case 'rock':
            img1.src = './images/rock.png'
            break;
        case'paper':
            img1.src = './images/paper.png'
            break;
        case 'scissors':
            img1.src = './images/scissors.png'
             break;
    }

}

changeComputerImage=computerSelection=>{
    
    switch(computerSelection){
        case 'rock':
            img2.src = './images/rock.png'
            break;
        case'paper':
            img2.src = './images/paper.png'
            break;
        case 'scissors':
            img2.src = './images/scissors.png'
             break;
    }
}

getComputerChoice=()=>{                           //This function returns the decision made by the computer
    let seleccion = Math.floor((Math.random() * 3));    //Generates a random number between 0 and 2

    items = ["rock","paper","scissors"];               //Array containing the computer's options
    return items[seleccion]                             //Take the random number and returns the option in that array's index
}

roundWinner=(playerSelection,computerSelection)=>{
    
    if(playerSelection == "rock" && computerSelection == "rock"){
        return'Tie!';
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerPoints++;
        return'Player wins!'
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        computerPoints++;
        return 'Computer wins!'
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        playerPoints++;
        return 'Player wins!'
    }else if(playerSelection == "paper" && computerSelection == "paper"){
        return 'Tie!'
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerPoints++;
        return 'Computer wins!'
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerPoints ++;
        return 'Computer wins!'
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerPoints ++;
        return 'Player wins!'
    }else if(playerSelection == "scissors" && computerSelection == "scissors"){
        return 'Tie!'
    }
}

victory=()=>{

    if (playerPoints == 5){
        res.innerText = "The player has earned the Victory!";
        btn.forEach(item=>{
            item.disabled = true;    
        })
        reset.disabled = false;
    }else if(computerPoints == 5){
        res.innerText = "Computer rises above human kind!";
        btn.forEach(item=>{
            item.disabled = true;    
        })
        reset.disabled = false;
    }
}

playRound=selection=>{

    const playerSelection = selection.target.innerText.toLowerCase();
    const computerSelection = getComputerChoice();
    changePlayerImage(playerSelection);
    changeComputerImage(computerSelection);
    res.innerText = roundWinner(playerSelection,computerSelection);
    playerPointsText.innerText = playerPoints;
    computerPointsText.innerText = computerPoints;
    victory();
    
}

