const myNum = [1,2,3,4,5,6,7,8,9,19]

const new_nums = myNum.map((num)=> { 
 return num+10
})

console.log(new_nums);  

//not needing the return in the scope here ! 
const second_method = myNum.forEach((n)=>{
 console.log(n+10);
})


//chaining 

let arr = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = arr.map((num)=> num*10).map((num)=>num+1); 
console.log(newNumbers); 