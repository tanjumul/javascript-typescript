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


  //map 

  const map = new Map(); 
map.set('BN', 'Bangladesh'); 
map.set('DE','Germany'); 
map.set('NP','Nepal'); 
console.log('Working ? ')
// for(const key in map){ 
//   console.log(key); 
// }

for(const [key,value] of map){ 
 console.log(key , '-:-' , value); 
}

const myObj = { 
  'game1': 'Rainbow 6 Siege', 
  'game2': 'Counter Strike 2', 
  'game3': 'Overwatch'
} 

for(const key in myObj){ 
    console.log(`${key} is my ${myObj[key]}`); 
}

const programming_lang = ['js', 'cpp', 'java']; 

for( key in programming_lang){
  console.log(key ,'=', programming_lang[key]); 
}
/**in array By default it starts with 0 , but in the Object it start with anyting that you can enter  */
console.log('starting forEach ! '); 

programming_lang.forEach((value , index )=>{ 
console.log(value +':'+index); 
})


const country = ['Deutschland', 'Bangladesh', 'France', 'Australia', 'Japan','United States of America','China','Italy','Norway','Thialand']; 

country.forEach((value, index , arr)=>{
  // console.log(value, index,arr); 
})


//very common on fetching data from database : 
const database = [
{
  languageName : 'JavaScript',
  languageDot : '.js'
} ,
{
  languageName : 'C++',
  languageDot : '.cpp'
} ,
{
  languageName : 'Python',
  languageDot : '.py'
} 

]

database.forEach((items , index, arr)=>{
  console.log(items.languageDot); 
})
