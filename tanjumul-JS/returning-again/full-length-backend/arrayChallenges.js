let TeaFlavours = ['Black Tea', 'Green Tea', 'Woolong Tee']; 

let First_tea = TeaFlavours[0]; 
console.log(First_tea); 

let cities = ['london','Tokyo','paris','newyork']; 

let favourite_city = cities[3]; 
console.log(favourite_city);

let teas =[ "harbal Tee" , "white Tee", "masala Tee","black tee"]; 
teas[2] = "tanjumul"; 
//  alterning = "Tanjumul"; 
//  console.log(alterning); 
 
 for(let i = 0; i<=3 ; i++){ 
    console.log(teas[i]);
 }

 //pusing another citiy in the array 

 cities.push("Sylhet"); 
 console.log(cities); 

 //hard and soft copy 

 //soft copy
 let arr = ["Sust","just","DU"]; 
 let another_arr = arr; 
 console.log(another_arr); 
 arr.pop();
 console.log(arr)
 console.log(another_arr);

 //hard copy
let arr1 = ["Milk", "tea", "biscuites"];

let another_arr1 = [...arr1];

arr1.pop();

console.log(arr1);
console.log(another_arr1);
/** i manupulated on the first array in the arr1 but not in the second array another_arr1 so 
 * it's not going to change on this.
 */

//check if it's in the array!
let europian_cities = ["spain","france","Germany"]; 
let find_out = europian_cities.includes("Spain"); 
console.log(find_out); 