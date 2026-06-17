function new_loop(point){
for(let i = 0; i<= point; i++){
  console.log(point)
} 

}

new_loop(15);

function* number(){ 
  let i = 0; 
  while(true) yield i++; 

}


const val = number(); 

const result = []; 

for(let i =0; i< 5; i++){ 
  result.push(val.next().value);
}
console.log(result); 
