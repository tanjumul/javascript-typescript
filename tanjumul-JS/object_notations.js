let  obj = {
  name : 'Tanjumul',
}

function* numbers (){ 
  let i = 0 ; 
  while (true) yield i++; 
}
const val = numbers();
console.log(

  val.map(n => n * 2)
  .take(5)
  .toArray(), 
);

// console.log(alert('Tanjumul using yield in replace of Loop'));