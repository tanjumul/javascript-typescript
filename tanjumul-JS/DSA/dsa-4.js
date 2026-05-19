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

function newArr(num){ 

   let oneArr = []; 

    for(let i = num.length-1; i>=0;  i--)
{ 
  oneArr.push(num[i]); 
}
return oneArr; 
}

console.log(newArr([6,5,3,7]));