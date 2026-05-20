// /* return a function that returns all the natural numbers from 1 to n 
// sum of 1 to 5 which is : 15 */

// function sumOfNaturalnumber(num){ 
//   let sum = 0 ; 

//   for (let i =1 ; i<=num; i++){ 
// sum+=i; 

// }
// return sum; 

// }

// console.log(sumOfNaturalnumber(5)); 



// function sum_of_natural(num){ 
//   let sum = 0 ; 

//   for(let i =1; i<=num; i++){ 
//     sum+=i; 
//   }
//   return sum; 

// }

// console.log(sum_of_natural(6)); 




/* Another way to do the same thing is  */

function natural_num_fast(num){ 
  return num*(num+1)/2; //this is the formula  , you should've known this, okay ! 
}
console.log(natural_num_fast(5)); 


let myArray = ['flash', 'batman', 'myfav: superman']; 
let index =0; 

while(index<myArray.length){ 

console.log(myArray[index]); 


  index++; 
}
/**High order array loops */

const arr = [1,2,3,4,5,6];

for(const num of arr){
  console.log(num); 
}

const greetings = 'Hello World'; 
  let count = 0; 
for(const i of greetings){ 

  console.log(i);
  count++;
 
}
  console.log(` the count of words are : ${count}`); 