// for of loop array[] specific loops ! 


const arr = [1, 3, 4, 45, 55]; 

for(const num of arr){
console.log(num);
}
const greetings = "Hello World! "; 

for(const nums of greetings){ 
  console.log(`Each character is ${nums}`); 
}

//maps 
const map = new Map()
map.set('BN', "Bangladesh"); 
map.set('US', "United State of America"); 
map.set('Aruba',"United State Aruba");
map.set('UAE',"United State of Arab Emirates" ); 

console.log(map); 
map.set('JP',"Japan");

console.log(map);

for( const key of map){ 
  console.log(key); 
}


for(const [key , value] of map){ 
  console.log(`They key is ${key} :- value will ${value}`);
}

const myObject = { 
  'game1' : 'PUBG', 
  'game2' : 'SpiderMan'
}


for(const [key , value] of myObject){
  console.log(key , ':-' , value)
}