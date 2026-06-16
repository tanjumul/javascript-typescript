
function new_loop (point){ 
  for( let i = 0 ; i<=point; i++){ 
    console.log(i); 
  }
}

new_loop(15);

function* number(){ 
  let i  = 0; 
while(true) yield i++ ; 
}

const val = number(); 

console.log(
val.map((index)=>{ 
  return index*2; 
})
.take(5).toArray(), 
)