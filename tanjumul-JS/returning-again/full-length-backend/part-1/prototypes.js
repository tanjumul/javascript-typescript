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


function Person(name, age){ 
    this.name = name; 
    this.age = age; 
}

let fun = new Person("tanjumul",27); 
console.log(fun.name); 

//another type ; 

// function Animals(type){ 
//     this.type = type;
// }

// Animals.prototype.speak = function (){ 
//     return  `${this.type} makes a sound`;
// }; 

// Array.prototype.tanjumul = function(){ 
//     return `Custom Method ${this}`; 
// }
// let Myarray = [1,2,3,4]; 
// console.log(Myarray.tanjumul()); 

// let MynewArray = [1,3,4,5,64,3,3,25,7,5,4]; 
// console.log(MynewArray.tanjumul("I used only this")); 


function Animals(type) {
    this.type = type;
}

Animals.prototype.speak = function () {
    return `${this.type} makes a sound`;
};

Array.prototype.tanjumul = function (message) {
    return `${message} | Custom Method ${this}`;
};

let Myarray = [1, 2, 3, 4];
console.log(Myarray.tanjumul("My first array"));

let MynewArray = [1, 3, 4, 5, 64, 3, 3, 25, 7, 5, 4];
console.log(MynewArray.tanjumul("I used only this"));