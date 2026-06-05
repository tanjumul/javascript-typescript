//event propagation : capturing & bubbling (event);  e.stopPropagation() ,. e.defaultPrevent , e.preventDefault() 



/**
 * in the event propagation no diff in true or false
 */


document.getElementById('images').addEventListener('click',(e)=>{ 
console.log('flase : clicked the ul picture'); 
},false); 

document.getElementById('owl').addEventListener('click',function(e){ 
  console.log('true : Owl clicked'); 

},true); 
