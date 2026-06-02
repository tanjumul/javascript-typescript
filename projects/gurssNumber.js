
let  randomNumber = parseInt((Math.random()+1)*10);

const userInput =  document.querySelector('#guessField'); 
const submit =  document.querySelector('#subt');

const remaining =  document.querySelector('.lastResult'); 
const guessSlot = document.querySelector('.guesses')
const lowOrHigh = document.querySelector('.lowOrHi'); 
const startOver = document.querySelector('.resultParas');
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
if(isNaN(guess)){ 
  alert('please enter a valid number'); 
}else if(guess < 1 || guess > 100 ){ 
  alert ('Please enter a valid number between 1 & 100'); 
} else{ 
  prevGuess.push(guess); 
  if(numGuess === 11){
    displayGuess(guess); 
    displayMessage(`Game over and the random number was ${randomNumber}`); 
    endGame(); 
  } else{ 
    displayGuess(guess); 
    checkGuess(guess); 
  }
}
}

function checkGuess (guess){ 
if(guess === randomNumber){ 
  displayMessage(`you guessed it right !`);
  endGame(); 
} else if (guess < randomNumber){ 
  displayMessage(`Number is too Low`); 
} else if( guess > randomNumber ){ 
  displayMessage(`Number is too High !`); 
}
}

function displayGuess (guess){
userInput.value = ''; 
guessSlot.innerHTML += `<span>${guess} ,</span>`
numGuess++; 
remaining.innerHTML = `${10-numGuess}`;
}

function displayMessage(message){ 
lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame (){ 
userInput.value = ''; 
userInput.setAttribute('disabled',''); 
p.classList.add('button');
p.innerHTML = `<h2 id = "newGame">Start new Game </h2>`;
startOver.appendChild(p);
playgame = false; 
newGame();
}

function newGame(){ 
const newGamebutton = document.querySelector('#newGame');
newGamebutton.addEventListener('click',function(e){ 
  randomNumber = parseInt((Math.random()+1)*10);
prevGuess = [];
numGuess = 1; 
guessSlot.innerHTML = '';
userInput.removeAttribute('disabled');
  startOver.removeChild(p); 
  playGame = true;
})
}