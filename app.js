let rps=["r","p","s"];
let userScoreUI=document.querySelector('.userScore');
let compScoreUI=document.querySelector('.compScore');
let controlsUI=document.querySelector('.controls')
let userChoice=document.querySelector('.userChoice')
let compChoice=document.querySelector('.compChoice')
let userInput,compInput,userScore=0,compScore=0;
let src;

function generateUserInput(e) {
    switch (e.target.classList[0]) {
        case "rock":
            return 'r';
        case "paper":
            return "p";
        case "scissor":
            return 's';
        default : return 'error'}
}

function generateCompInput() {
   return (rps[Math.floor(Math.random()*3)]);
}

function checkWinner(e) {
    userInput=generateUserInput(e);
    compInput=generateCompInput();
    console.log(compInput);
    
   let userWin = (userInput==='s' && compInput==='p') || (userInput==='r' && compInput==='s') || (userInput==='p' &&                     compInput==='r') 
    if (userWin)
        userScore++;
    else if(userInput==="error"){return 0;}
    else (!(userInput===compInput))? compScore++: 2+3;
    UILogger();
        
}

function UILogger() {
    userScoreUI.innerText=userScore;
    compScoreUI.innerText=compScore;
    userChoice.src=srcAssigner(userInput);
    compChoice.src=srcAssigner(compInput);
    userChoice.className='userChoice d-inline-block';
    compChoice.className='compChoice d-inline-block';
}

function srcAssigner(par) {
    if (par==='s') 
        return 'scissors.png'
    else if(par==='p')
        return 'paper.png'
    else return 'rock.png'
}



controlsUI.addEventListener('click',checkWinner)