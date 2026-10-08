let index = 0; 

while(index<=10){ 
  console.log(`Value of index  ${index}`); 
  index  = index+2; 
}

let Myarray = ['flash', 'batman','superman',  { 
  name :'tanjumul', 
  district : 'Gaibandha', 
  age : 27
}]; 

let arr = 0;
while(arr< Myarray.length){ 
console.log(`Value is = ${Myarray[arr-1]}`); 
arr+=1; 
}

let indexx = 10; 
for(let i = 0; i<indexx; i++){ 
  if(typeof Myarray[i]=== 'object'){ 
console.log(`The information about the user's age is : ${Myarray[i].age}`);
  }

}
