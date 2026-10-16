const myNums = [1,2,3,4]; 

// const myTotal = myNums.reduce(function(acc , currvval){


// console.log(`Accumulator : ${acc} && Current Value : ${currvval} = ${acc + currvval}`);

//   return acc + currvval;
  
// },0);

// console.log(myTotal); 

const myHis = [{ 
  name : 'Online_jua', 
  price : 2000
}, 
{ 
  name : 'Machine Learning',
  price : 7999
}, 
{
  name : 'Web Development', 
  price : 700
}, 
{ 
  name : 'Data Science',
  price: 14000
} ] 


const total = myHis.reduce((acc , fun) => acc + fun.price , 0 )

console.log(total); 
