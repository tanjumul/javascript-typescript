/**previous practice */

// function DiviSor(num){ 

//   let n = []; 
//   for(let i =1 ; i <=num ; i++){ 
//     if(i%3 ==0 && i%5==0){ 
//       n.push(i); 
//     }
//   } 

//     // for(let j = 0; j<n.length; j++){ 
//     //  console.log(n[j]); 
//     // }
//      return n; 
//   }



// console.log(DiviSor(30)); 



/**Find the Sum of the odd numbers upto N  
 
 input : 10 , 
 output : 25 , (1+3+5+7+9)  */


//  let num = 10; 
//     let sum = 0; 
// for(let i = 1; i<=num; i++){ 
//   if(i%2!==0){  
//     sum+=i; 
//   }

// }
//   console.log(sum);

 /*
 Print the Cubes of numbers from 1 to N 
 input : 5 , 
 output : 1,8,27, 64,125 
 */

//  let n  = 5; 
//  let cube = 0; 
//  for(let i =1 ; i<=n ; i++){ 
//   cube = i*i*i; 
//    console.log(cube);
//  }

/** print only the numbers that are both even and perfect squares : 
 input : 1 to 20 
 output : 4 , 16  */



// let n = 20 ;

// let pft_sqr = []; 
// for(let i = 1; i<=n; i++){ 
//   let root = Math.sqrt(i); 
//   let  rooted = Math.floor(root);
//   if(root === rooted && i%2==0){ 
//     pft_sqr.push(i);
//     console.log(pft_sqr); 
//   }
// }




// let a = 10 , b = 20 , c= 5; 

// if(a>b){ 
//   console.log(a);
// }else if(b>a) { 
// console.log(b);
// } else if( b > c){ 
//   console.log(b)
// } else if (c > a){ 
//   console.log(c);
// }else { 
//   console.log(c);
// }


function bigBoss(x , y , z){ 

  let bigN ;
  
(x>=y && x >= z) ? bigN = x : (y >= z && y >= x) ? bigN = y : bigN = z; 
return bigN; 
}

console.log(bigBoss(10,20,5))



//check a number is it a positve , negative or zero ? 

/*function seeYou(n){ 

let result; 
(n>0) ? result = 'Positive': (n<0) ? result = 'Negative' :  result = 'Zero';
 console.log(result);  

} 

console.log(seeYou(0)); */ 


//input unit : 230
//output = 1500; 

// let result = 0; 
// function calculateElectricityBill (unit){ 

// if(unit <= 100){ 
// result = unit*5;   
// return result; 
// }else if (unit <= 200){ 
//   result = 100*5 + ((unit-100) * 7); 
//   return result; 
// }
// else if (unit<= 300){ 
// result = 100*5 + 100*7 + ((unit-200) * 10); 
// return result; 

// } else { 
//   result = 100*5 + 100*7 + 100 * 10 + ((unit-300)*12); 
// }
// return result; 

// }


// console.log(calculateElectricityBill(240));


/** check a character is vowel or consonent */