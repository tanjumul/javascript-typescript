const body = document.querySelector('body'); 
const buttons = document.querySelectorAll('.button');

buttons.forEach((box)=>{
  console.log(box); 
  box.addEventListener('click',function(e){ 
    console.log(e); 
    console.log(e.target); 
      if(e.target.id === 'grey'){ 
      body.style.backgroundColor = 'red'; 
      } else if(e.target.id === 'white'){ 
        body.style.backgroundColor = 'green'; 
      }else if(e.target.id === 'blue'){
        body.style.backgroundColor = 'pink'; 
      }else{
        body.style.backgroundColor= 'red'; 
      }
  })
})