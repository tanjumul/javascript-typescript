let  obj = {
  name : 'Tanjumul',
}

function* numbers (){ 
  let i = 0 ; 
  while (true) yield i++; 
}
const val = numbers ()
console.log(
  .map(n => n * 2)
  .take(5)
  .toArray(), 
);

alert('Tanjumul using yield in replace of Loop')