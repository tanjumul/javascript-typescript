
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