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
