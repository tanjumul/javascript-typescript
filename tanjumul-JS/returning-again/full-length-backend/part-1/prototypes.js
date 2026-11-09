let computer = {ram : 24}; 
let apple = { 
    cpu : "m5", 
    display : "4k", 
    __proto__ : computer,
}

let TanjumulHardware = {}; 
console.log(`Spec :`,apple ,`&`, apple.__proto__); 

let normal_car = {
    tyers : 4, 
    winddow : 4, 
    hyper_mode : "off",
}

let superCar = { 
    Electric_car : "NO", 
    gas : "yes",
}

Object.getPrototypeOf(normal_car,superCar);
console.log(`My Hybrid car has :`,normal_car,superCar); 
