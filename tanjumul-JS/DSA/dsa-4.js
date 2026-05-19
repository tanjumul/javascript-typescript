/**
 searching the patter to reverse a array from a array 
 arr = [2,4,5,6] 
 arrNew = [6,5,4,2]
 */

 /*

 function number(num){ 
  let num2 = []; 
for(let i=num.length-1; i>=0;  i--){ 
num2.push(num[i]); 
}
console.log(num2); 
 }

 number([7,3,2]);

*/ 
 //another way : 

// function neWay(num1){ 

//   let num = 0; 
//  num1.forEach((digit,index)=> {
// num += digit * Math.pow(10,index);
//  }); 
//  return num;

// }

// console.log(neWay([2,4,6,8]));


// function newBoard(num){ 

//   let numbers = 0; 
//     num.forEach((digits, index)=>{ 
//      numbers+= digits *  Math.pow(10,index); 
 
//     }); 
//         return numbers; 

// }

// console.log(newBoard([2,5,3,6])); 



// arrNew = [6,5,4,2]

// function newArr(num){ 

//    let oneArr = []; 

//     for(let i = num.length-1; i>=0;  i--)
// { 
//   oneArr.push(num[i]); 
// }
// return oneArr; 
// }

// console.log(newArr([6,5,3,7]));


/** now to do a array like reversing it through mathmatically  */

// function printNumbers(num){ 
// let newNum =0; 
// num.forEach((digit, index)=>{ 
// newNum += digit * Math.pow(10, index); 
// });
// console.log(newNum); 
// }

// printNumbers([2,3,4,6]); 



/**find the sum of digits : 
 * input N = 987
 * output : 24; 
 */

// function FindQuest(num){ 
// let sum = 0; 
// let nn = num; 
   
//   while(nn>0){ 
//     sum+= Math.floor(nn%10); 
//     nn = Math.floor(nn/10); 
//   } return sum; 

//     }  

// console.log(FindQuest(225)); 

/*
Find the Average of Digits

Input: N = 4567
Output: Average = 5.5
✨ Combines digit sum and count for average computation.

*/

function numNum(num){ 
let counter = 0; 
let n=num;
let sum = 0;

while (n>0){ 
sum+= Math.floor(n%10);
n = Math.floor(n/10); 
counter++; 
}
let avg = sum / counter; 
return avg; 

}

console.log(numNum(4567)); 