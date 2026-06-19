//generating a random color using random hex values ; 
let IntervalID = null; 
let randomColor = function (){ 
  const hex = "0123456789ABCDEF"; 
  let color = '#'; 

  for(let i = 0 ; i < 6; i++){ 
    color+=hex[Math.floor(Math.random()* 16)]; 
  }
  document.body.style.backgroundColor = color; 
return color; 


}
 


let colorSelect = document.querySelector('#start').addEventListener('click',function(e){ 

  if(IntervalID){ 
    clearInterval(IntervalID);
    IntervalID = null; 
  }
  else { 
IntervalID =   setInterval(randomColor,1000);
  }
  
});

let stopColorSelect = document.querySelector('#stop').addEventListener('click',function(e){ 

  if(IntervalID){ 
clearInterval(IntervalID);
IntervalID = null; 
  }
  
})