let a = 300; 

if(true){ 
  let a = 10; 
  const b = 20; 
  console.log('inner variable:' , a ); 
}

console.log('outer variable:', a); 


function one(){ 
  const userName = 'Tanjumul'; 

  function two (){ 
    const website = 'Aylo'; 
    console.log(userName); 
  }
  // console.log(website); 
  two(); 
}
one(); 



if(true){ 
  const username = 'tanju'; 
  if(username === 'tanju'){ 
    const webSite = 'tanjuParadise'; 
    console.log(username + ' ' + webSite); 
  }
}
// console.log(username); 


/**+++++++++++++++++++++++ Interessant +++++++++++++++++++++++++++++ */

//you can declare a value before calling a function : 

console.log(Calal(5)); 
function Calal(num){ 
  return num+1; 
}

/**see it will still work because of its declaration, it's a direct funciton if i would've stored it in a variable then the case would be different here ! */

const powerTanju = function HeavyNum(n){ 
  console.log(n+2); 
 
}
 console.log(powerTanju(6)); 