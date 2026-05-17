//Immediately invoked function expressions(iife); 


(function koffe(){
  console.log('Database Connected '); 
})();

// for the global scope in some time we have so see so many problems because of it , to avoid this we use the the iife to run it immediately! 

(  (num1, num2) => { 
  const cal = num1+num2
  console.log(cal); 
}) (1,3); 

//you can declare the numbers in this way also ! without using any declaration form like iife ! 
const myFunction = ( (num1, num2)=>{ 
  const lol = num1 + num2 ; 
  console.log(lol);
}) (55,29); 
console.log(typeof myFunction)
// myFunction(1,5); // also works with it 
