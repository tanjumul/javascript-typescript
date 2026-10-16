const myNums = [1,2,3,4]; 

const myTotal = myNums.reduce(function(acc , currvval){


console.log(`Accumulator : ${acc} && Current Value : ${currvval} = ${acc + currvval}`);

  return acc + currvval;
  
},0);

console.log(myTotal); 

