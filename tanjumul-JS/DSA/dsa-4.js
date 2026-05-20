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

/*
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
*/ 


/**Find the Largest and Smallest Digit in a Number

 Input: N = 9483
Output: Largest = 9, Smallest = 3

 */
/*
function smallBig(num){
let arr = []; 
let n = num; 
sum=0; 
m = arr.length;

while(n>0){ 
  let digit = Math.floor(n%10); 
  arr.push(digit); 
  n = Math.floor(n/10); 
}
for (let k =0; k<=arr.length; k++){ 
  console.log(arr[k]); 
}

let high = arr[0]; 
let low = arr[0]; 


for(let i =0; i<=arr.length; i++){
  for(let j =0; j<=m; j++){
    if(arr[i]> arr[j]){
      high =arr[i]
    }else {
    low =arr[j];
    }
  }
}
console.log(`Highest : ${high} and lowest  : ${low}`);

// for(let i =0; i<=arr.length;i++){ 
//   for(let j =0; j<=i; j++){ 
//     if(arr[i]>arr[j]){ 
//       console.log(`The biggest is : ${arr[i]}`);
//     } else { 
//         console.log(`The lowest are : ${arr[j]}`);
//     }
//   }
// }


}


console.log(smallBig(9482)); */



// const n = 112233;

// function countFrequency(n) {
//   const frequency = {};
//   while (n !== 0) {
//     let lastDigit = Math.floor(n % 10);
//     if (!frequency[lastDigit]) {
//       frequency[lastDigit] = 1;
//     } else {
//       frequency[lastDigit] = frequency[lastDigit] + 1;
//     }
//     n = Math.floor(n / 10);
//   }

//   return frequency;
// }

// console.log(countFrequency(n));

/*
function countFrequency(num){ 
let count = 0; 
let n = num; 
let obj = {};
while(n>0){ 
  
  let seal = Math.floor(n%10);
  if(!obj[seal]){ 
    obj[seal] = 0; 
    obj[seal]++;
  }
  else { 
    obj[seal]+=1;
  }
  n = Math.floor(n/10); 
}
return obj; 

}

console.log(countFrequency(111222222222233));

*/ 



// Input: N = 112233
// Output: 1 → 2, 2 → 2, 3 → 2
/*
function playObj(num){ 

  let count =0; 
  let obj ={}; 

  let nn = num; 

  while(nn>0){
  let n = Math.floor(nn%10); 
    if(!obj[n]){ 
      obj[n]=1; 
      
    }else{
     obj[n]++; 
    }

    nn=Math.floor(nn/10); 
  }
    return obj ; 

}


console.log(playObj(1112222443533)); 
*/ 

// const work = { 
//   IELTS : 'Listening', 
//   JS : 'Hitesh', 
//   FrontEnd : 'FreeCodeCamp'
// }

// console.log(work); 

const work = { 
  IELTS : 'Listening', 
  JS : 'Hitesh', 
  FrontEnd : 'FreeCodeCamp'
}

const numberedWork = new Map();
Object.entries(work).forEach(([key, value], index) => {
  numberedWork.set(`${index + 1}. ${key}`, value );
});

console.log(Object.fromEntries(numberedWork));

