let  obj = {
  name : 'Tanjumul',
}

function* numbers (){ 
  let i = 1 ; 
  while (true) yield i++; 
}
const val = numbers();
console.log(val.map((n)=>{ return n;}).take(5).toArray()); 

/*
console.log(

  val.map(n => n)
  .take(5)
  .toArray(), 
);
*/

// console.log(alert('Tanjumul using yield in replace of Loop'));