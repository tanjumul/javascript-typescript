
const randomNumber = parseInt((Math.random()+1)*10);

const userInput =  document.querySelector('#guessField'); 
const submit =  document.querySelector('#subt');

const remaining =  document.querySelector('.lastResult'); 

const lowOrHigh = document.querySelector('.lowOrHi'); 

const p = document.createElement('p'); 

let prevGuess = []; 
let playGame = true; 
let numGuess = 1;

if(playGame){ 
submit.addEventListener('click',function(e){
e.preventDefault(); 
const guess = parseInt(userInput.value); 
  console.log(guess); 
  validGuess(guess); 
})
}

function validGuess(guess){ 

}

function checkGuess (guess){ 

}

function displayGuess (guess){

}

function displayMessage(message){ 

}

function endGame (){ 

}

function newGame(){ 

}