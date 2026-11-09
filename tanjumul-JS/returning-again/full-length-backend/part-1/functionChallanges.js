function makeTea(teas){ 
         return `Making ${teas}`; 
         
}
let teaOrder = makeTea("Lamon Tea"); 
// console.log(teaOrder); 

function orderTea(teaType){ 
function confirmOrder(){
    return `Order confirmed for Chai for ${teaType}`; 
}
return confirmOrder(); 
}
const confirmOrderTee = orderTea("Dudh Cha vai"); 

console.log(confirmOrderTee); 


const calculateTotal = (price , quantity)=>{ 
    return price * quantity; 
}
//if there is no {} then we may don't need to use the return
// so you can you the one line tho. 

/*
console.log(calculateTotal(13,10)); 

function createTeaMaker(){
   return function(teaType){
        return `Making Green Tea for : ${teaType}`; 
    };
}

let teaMaker = createTeaMaker();

console.log(teaMaker("tanjumul")); 
*/



/* write a function named `createTeaMaker`that returns another function 
The returned fucntion should take one parameter, "teaType"; and retrun a
 message like "making greentea " store the returned function in a variable named teamaker and call it with "green tea " */

function createTeaMaker(name){
    return function teaReady(teaType){
        return `Message : ${teaType} for ${name}`;
    }
}

let teamaker = createTeaMaker("tanjumul"); 
console.log(teamaker("Making Green Tea")); 

