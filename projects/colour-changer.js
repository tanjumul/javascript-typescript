const body = document.querySelector('body'); 
const buttons = document.querySelectorAll('.button');

buttons.forEach((box)=>{
  
  box.addEventListener('click', 
    function(){ 
      if(box.id === 'grey'){ 
        body.style.backgroundColor = 'red'; 
      } else if (box.id === 'white'){ 
        body.style.backgroundColor = 'pink'; 
      } else if(box.id === 'blue'){ 
        body.style.backgroundColor = 'green'
      } else { 
        body.style.backgroundColor = 'orange'; 
      }
    }
  )


});