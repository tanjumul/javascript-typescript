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