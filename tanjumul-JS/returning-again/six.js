/**
const coding = ["Js", "ruby", "java","python","cpp"]


const values = coding.forEach((item)=>{ 
  console.log(item);
 
})

console.log(values);
 */


const myNum = [1,3,4,5,6,23,3,46,7,8,3]; 

const Mynumbers = myNum.filter((num)=>{
  return num>4; 
}
  

)

console.log(Mynumbers);


const newNums = []

myNum.forEach((num)=>{
  if(num>4){ 
   newNums.push(num); 
  } else { 
    console.log("Printing nothing ")
  }
})

console.log(newNums);