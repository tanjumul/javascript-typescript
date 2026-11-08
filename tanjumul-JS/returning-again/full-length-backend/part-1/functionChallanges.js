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

console.log(calculateTotal(13,10)); 
