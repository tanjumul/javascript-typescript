// const body = document.querySelector('body'); 
// const buttons = document.querySelectorAll('.button');

// buttons.forEach((box)=>{
//   console.log(box); 
//   box.addEventListener('click',function(e){ 

//       if(e.target.id === 'grey'){ 
//       body.style.backgroundColor = 'red'; 
//       } else if(e.target.id === 'white'){ 
//         body.style.backgroundColor = 'green'; 
//       }else if(e.target.id === 'blue'){
//         body.style.backgroundColor = 'pink'; 
//       }else{
//         body.style.backgroundColor= 'red'; 
//       }
//   })
// })
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