//event propagation : capturing & bubbling (event);  e.stopPropagation() ,. e.defaultPrevent , e.preventDefault() 



/**
 * in the event propagation no diff in true or false
 * ture : captureing propagation 
 * false : bubbling from down to up
 */
/*
//capturing
document.getElementById('images').addEventListener('click',(e)=>{ 
console.log('clicked the ul picture'); 
// e.stopPropagation(); 
},false); 


//bubbling 
document.getElementById('owl').addEventListener('click',function(e){ 
  console.log('Owl clicked'); 
//e.stopPropagation(); //here it will never use the event bubbleing effect ! 
},false); 


document.getElementById('google').addEventListener('click', function(e){ 
  e.preventDefault(); 
  e.stopPropagation(); 
  console.log('google clicked');
},false); 

*/ 

document.querySelector('#images').addEventListener('click',function(e){ 
// console.log(e.target.tagName); 
if(e.target.tagName  === 'IMG'){ 
  console.log(`Removed : ${e.target.id}`);
  let removeIt = e.target.parentNode; 
  removeIt.remove(); 
}

// let removeIt = e.target.parentNode; 
// removeIt.remove(); 


//removeIt.parentNode.removeChild(removeIt); another way to use this 
}); 