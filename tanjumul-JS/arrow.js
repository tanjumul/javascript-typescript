
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