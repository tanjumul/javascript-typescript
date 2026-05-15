#  Question & then the solutions <br>

1. You have to print numbers n = 10; loop thorough the number and print that in console. 
[task] : You can use Dom to take from the input field then put it in the console. 

#HTML
```HTML 
<!DOCTYPE html>
<html>
  <head>
    <title>Day1</title>
  </head>
  <body>
    <h1>Welcome to Day-1 DSA </h1>
    
    <input type="text" placeholder="Enter the number" class="givein">


    <button class="subs" onclick="
   calculate(); 
    ">Submit</button>

    <p class="param"></p>
    <script src="./dsa-1.js">
      
    </script>
  </body>
</html>
```

```javascript 

// const num = prompt('Enter your number for the loop ! ');  

function calculate ()
{ 
const takeNumber = document.querySelector('.givein'); 
const Intlen = takeNumber.value; 

  for(let i=1; i<=Intlen; i++){ 
  console.log(i); 
}
console.log(takeNumber); 
}



```


2. Print numbers from N to 1 without changing the loop condition above. 
  - input : 5 
  - output 5 , 4, 3, 2, 1


```javascript 
let num = 10 ; 
for (let i =1 ; i<=num; i++){ 
  let number = num - i+1; 
}
console.log(number); 
```


3. Take out the even numbers from the inputed value above : 
 
 input num : 10 
 output : 2 , 4, 6, 8 , 10 

 ```javascript 
 const num = 10; 

for(let i =1; i<= num ; i++){ 
  if(i%2 == 0 ){ 
    console.log(` even num : ${i}`); 
  } else{ 
    console.log(`this is the odd num : ${i}`); 
  }
}
```


4. Print the sum of the first N natural numbers : 
  - input : 5 <br>
  - output : 15 
  - complexity : O(n)

### Option Red : Time Complexity : O(1)

``` javascript 
num = 5; 

let sum = num * (num +1) / 2; 
console.log(sum); 
```

### Option Blue : time complexity O(n)


```javascript 

let num = 5; 
let sum = 0
for (let i = 1; i<=num; i++){ 
   sum = sum + i; 
}
console.log(sum); 

```


5.Factorial of N  : 
- input : 5 
- output : 120 
## time Complexity : O(n)
```javascript 

let num = 5; 
sum = 1 ; 

for(let i =1 ; i<=num ; i++ ){ 
  sum = sum * i ; 

}
console.log(sum); 


```

6. Sum of all even numbers up to N ; 
 - input : 10 ;
 - output : 30 ; 


## Time Complexity : O(n)

```javascript 
let n = 10;
let sum = 0 ; 
for(let i = 1; i <=n; i++) {

  if(i%2==0){ 
  sum =sum + i ; 
  } 

   
}
console.log(sum);
```


## Optimised code :  Time complexity : o(1)


```javascript 

let n = 10;
let sum = 0 ; 
let k = Math.floor(n/2); 

sum = k * (k+1);

console.log(sum); 

```



7. Print Squares of Numbers from 1 to N 

## Time Complexity will be : o(n)
```javascript 

let num = 5; 
let sum = 0
for(let i = 1; i<=num ; i++){ 
sum = i*i ;
console.log(sum);  
}

```

8. Print all numbers  divisible by 3 and 5 upto n : 
input : 30 
output : 15, 30
## time complexity will be : o(n)

```javascript

function DiviSor(num){ 

  let n = []; 
  for(let i =1 ; i <=num ; i++){ 
    if(i%3 ==0 && i%5==0){ 
      n.push(i); 
    }
  } 

    // for(let j = 0; j<n.length; j++){ 
    //  console.log(n[j]); 
    // }
     return n; 
  }



console.log(DiviSor(30)); 
```

9. Find the Sum of the odd numbers upto N  
 
 input : 10 , 
 output : 25 , (1+3+5+7+9) 

```javascript 

 let num = 10; 
    let sum = 0; 
for(let i = 1; i<=num; i++){ 
  if(i%2!==0){  
    sum+=i; 
  }

}
  console.log(sum);

```


10. Print the Cubes of numbers from 1 to N 
 input : 5 , 
 output : 1,8,27, 64,125 

```javascript 
let n  = 5; 
 let cube = 0; 
 for(let i =1 ; i<=n ; i++){ 
  cube = i*i*i; 
   console.log(cube);
 }



```

11. print only the numbers that are both even and perfect squares : 
 input : 1 to 20 
 output : 4 , 16 
 ```javascript



let n = 20 ;

let pft_sqr = []; 
for(let i = 1; i<=n; i++){ 
  let root = Math.sqrt(i); 
  let  rooted = Math.floor(root);
  if(root === rooted && i%2==0){ 
    pft_sqr.push(i);
    console.log(pft_sqr); 
  }
}



 
   ```

   12. find the biggest number among all the inputs 
   input : 10 , 20 , 5 
   output : 20 


# Option : 1 with if else ; 
   ```javascript 

let a = 10 , b = 20 , c= 5; 

if(a>b){ 
  console.log(a);
}else if(b>a) { 
console.log(b);
} else if( b > c){ 
  console.log(b)
} else if (c > a){ 
  console.log(c);
}else { 
  console.log(c);
}
```

# option 2 : with function : 

```function 
function bigBoss(x , y , z){ 

  let bigN ;
  
(x>=y && x >= z) ? bigN = x : (y >= z && y >= x) ? bigN = y : bigN = z; 
return bigN; 
}

console.log(bigBoss(10,20,5))


```


13. Check a number is positive, negative or zero ; 

## Time Complextity will be : o(1)

```javascript 
let n = -9; 
let result; 
(n>0) ? result = 'Positive': (n<0) ? result = 'Negative' :  result = 'Zero';
 console.log(result);  
```

13 . Check the unit price here if it's below 100 then each unit will be 5taka , <br> if it's less than 200 it will cost 7 taka for each units <br> if its below 300 or equal then it will cost you 10 taka , if it's higher than <br> 300 then it will cost 12 taka for each unit. 

  input : 240 
  output : 1500
# time complexity : O(1);

```javascript 


let result = 0; 
function calculateElectricityBill (unit){ 

if(unit <= 100){ 
result = unit*5;   
return result; 
}else if (unit <= 200){ 
  result = 100*5 + ((unit-100) * 7); 
  return result; 
}
else if (unit<= 300){ 
result = 100*5 + 100*7 + ((unit-200) * 10); 
return result; 

} else { 
  result = 100*5 + 100*7 + 100 * 10 + ((unit-300)*12); 
}
return result; 

}


console.log(calculateElectricityBill(240));

```

14. Check whether a character is a vowel or a consonant in a given word; call a function to solve this

Enter : Tanjumul 
Output : Consonant.


```javascript 

let word = [];  
function takeWord(word){ 

  for (let i =0; i< word.length ; i++){
    if(word[0] === 'a' || word[0] === 'A'){ 
      return 'Vowel';
    }else if (word[0]=== 'e' || word[0] === 'E'){ 
      return 'Vowel'; 
    }
    else if(word[0] === 'i' || word[0] === 'I'){
      return 'Vowel'; 
    }
    else if(word[0] === 'o' || word[0] === 'O'){ 
      return 'Vowel'; 
    } else if(word[0] === 'u' || word[0] === 'U'){
      return 'Vowel'; 
    }else { 
      return 'consonent';
    }
  }
  


}

console.log(takeWord('Tanjumul')); 

```

14.Check if a character is a Vowel or Consonant , combine logical OR || operator and string comparisons. 

```javascript

let char = ['a' , 'e' , 'i' , 'o' , 'u', 'A','E','I','O','U']; 
let ch = 'A'; 
let isVowel = false;
for(let i =0 ; i<char.length; i++){ 
  if(char[i]=== ch){
    isVowel = true;
    break; 
  }
}

if(isVowel){ 
  console.log('Vowel')
}else{ 
  console.log('Consonent'); 
}
```

## Option : 2
 ```javascript 


function checkVowel(char = ' '){ 


if('aeiou'.includes(char.toLowerCase()) && char!= ' ') {
  return 'vowel';
}
else if(/[a-z]/.test(char)){ 
  return 'Consonent'; 
}

return 'Not a Valid Alphabet'; 
}

console.log(checkVowel('1'));
``` 

15. Check n a leap year : 
input : 2026 
output : not Leap Year 

remember  
  - a year is a leap year if it satisfies these conditions : 
  1.Year%4=== 0; 
  2.year%100!== 0; 
  3.year%400=== 0; 

```javascript 

function check_year(n){ 

  if(n%4  === 0 || (n%100!== 0 && n%400 === 0)){ 
    return 'Leap Year''
  }

  return 'Not a Leap Year ! ';

}

console.log(check_year(2026));
```

16. Check if a character is uppercase , lowercase , digit or special character
 -  input : A 
 -  Output : Uppercase Letter of inputed character

```javascript 

function checChar(ch){ 

  // if(typeof ch === 'string' && ch.length !>= 1 ){ 
  //   return 'Enter a valid charecter here not a Word !';
  // }
  if ( /[A-Z]/.test(ch)){ 
    return 'Uppercase Letter';
  } else if(/[a-z]/.test(ch)){ 
    return 'Lowercase Letter';
  } else if (/[0-9]/.test(ch)){ 
    return 'Digit';
  } else {
    return 'Special Character';
  }


}
console.log(checChar('a'));
console.log(checChar('U')); 
console.log(checChar('7')); 
console.log(checChar('$'));
```

 17.Check Triangle type using slides and angles : 
 -  input slides = 3,4,5
 -  output : Right-Angled Triangle 

 example logics : 
 -  if a^2 + b^2 = c^2  -> right angled 
 -  Else if all slides equal -> equilateral 
 -  Else if any two equal -> isosceles 
 -  Else -> scalene 

 18. Calculate income tax based on slabs 
 -  input : income = 750000
 -  output : tax = 52500 

 examples : 
  - upto 250000 -- no tax 
  - 250001 -- 500000 --> 5% 
  - 500001 -- 1000000 -->20% 
  - above 100000 -> 30% 
