
let tanju = true; 

if(tanju){ 
console.log('Its executing '); 
} else{ 
  console.log('Not executing ! ');
}

const isUserLoggedIn = true; 
if(isUserLoggedIn){ 
  console.log('Logged In'); 
}


const temperature = 50; 

if(temperature < 41 ){
  console.log('Less than 40');
}else { 
  console.log('Grater than 41'); 
}

const userLoggedIn = true; 
const debitCard = true; 
const loggedInFromGoogle = true; 
const loggedInFromEmail = false; 

if(userLoggedIn && debitCard ){

  console.log('Allow him to buy !'); 
} 
 if(loggedInFromEmail || loggedInFromGoogle){ 
  console.log('User Logged in'); 
}

const isEmail = [];
if(isEmail.length === 0){ 
  console.log('The user email is empty');
}else{ 
  console.log('User has a email');
}

const emails = { 

}

if(Object.keys(emails).length === 0){
  console.log('Object is Empty ');
}else {
  console.log('Object has numbers'); 
}

/** truthy valus : 
 * 'false' 
 * ' ' 
 * " "
 * "0" 
 * []
 * function(){}
 * {}
 */

/** Falsy values
 * null
 * 0 
 * false 
 * ""
 * ''
 *  -0 
 * BigInt 0n 
 * undefined 
 * NaN
 */

