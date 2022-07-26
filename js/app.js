let computerPoints = 0;

let playerPoints = 0;

const btn = document.querySelectorAll(".action");                       //Save all the Buttons in a Node
const res = document.querySelector('.resultadoTexto');                  //Saves the text with the result of each match
const img1 = document.querySelector('.img1');                           //Saves the player selection Image
const img2 = document.querySelector('.img2');                           //Saves the computer Selection Image
const playerPointsText = document.querySelector('.playerPoints');       //Saves the text with the player Points
const computerPointsText = document.querySelector('.computerPoints');   //Saves the text with the computer Points
const reset = document.querySelector('.again');                         //Saves the reset button

btn.forEach(item=> {                                    //For each node element Do
    item.addEventListener('click',(e)=>{                //Add an Event Listener for a click on every button
        e.stopPropagation();                            //Don't compute clicks on other elements
        let result = playRound(e);                      //Call the playRound Function
    })
});

reset.addEventListener('click',(e)=>{                   //Function to reset all the things to it's initial value
    e.stopPropagation();                                //To get the right scope of the click
    btn.forEach(item=>{                                 //Enable each button
        item.disabled = false;
    })
        playerPoints = 0;                               //Set player score to 0
        computerPoints = 0;                             //Set Computer score to 0
        img1.src = "./images/prs.jpg"                   //Set the image to the initial image
        img2.src = "./images/prs.jpg"
        res.innerText = 'Who will win? Neurons or transistors? The first getting 5 points will earn the victory!' //Set the text to its original state
        playerPointsText.innerText = 0;
        computerPointsText.innerText = 0;
        reset.disabled = true;                          //Disable the reset button
})

changePlayerImage=playerSelection=>{                    //Function to change the player image to the one selected to play

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

changeComputerImage=computerSelection=>{                //Function to change the player image to the one selected to play
    
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

getComputerChoice=()=>{                                 //This function returns the decision made by the computer
    let seleccion = Math.floor((Math.random() * 3));    //Generates a random number between 0 and 2

    items = ["rock","paper","scissors"];                //Array containing the computer's options
    return items[seleccion]                             //Take the random number and returns the option in that array's index
}

roundWinner=(playerSelection,computerSelection)=>{      //Gets player and computer selections, it decides who won and gives points
    
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

victory=()=>{                                                       //When someone gets 5 points declares the winner and disables all the buttons
                                                                    //But also enables the reset button
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

playRound=selection=>{                                                  //Full round flow

    const playerSelection = selection.target.innerText.toLowerCase();   //Get's the player's selection, from the clicked button
    const computerSelection = getComputerChoice();                      //Get's the computer choice
    changePlayerImage(playerSelection);                                 //Change both images
    changeComputerImage(computerSelection);                             
    res.innerText = roundWinner(playerSelection,computerSelection);     //Show the text of who won
    playerPointsText.innerText = playerPoints;                          //Show player's score
    computerPointsText.innerText = computerPoints;                      //Show computer's score
    victory();                                                          //Decides if ther is a winner
    
}

