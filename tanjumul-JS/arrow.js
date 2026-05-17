
const user = { 
  username:'Tanju', 
  price : 999, 

  welcomeMessage : function (){ 
    console.log(`${this.username} Welcome to the TaliKhata App !`); 
    console.log(this); 
  }
}
/*
user.welcomeMessage(); 
user.username = 'Siam'; 
user.welcomeMessage(); /** here reference just changed the values from tanjumul > siam */ 

// console.log(this); 

function koffe(){ 
 let userName = 'siam'; 
  console.log(this.userName); 
}

koffe(); 
/** it only works in objects not in functins , see it's not working in this 
 * function here ! okay ? tanju ! 
 */


const calTech =  ()=> { 
  let username = 'Tanju'; 
  console.log(this); 
}

calTech(); 

//example of the explecit return : 
const addTwo = (num1,num2)=> {
  return num1 + num2; 
}
console.log(addTwo(5,2)); 


/**here i used the implicit  return  */
const adTwo = (n1,n2)=> n1 + n2; 

console.log(adTwo(5,2)); 

const boguraMorich = (nu1, nu2)=> (nu1 + nu2); 
console.log(boguraMorich(55,55)); 

//for object return : 


const addObj = (number1, number2) => ({ 
  userName : 'Tanjumul',
  address : 'poschim para' , 
  vel :  number1+number2
})
console.log(addObj(10,22).vel); 

