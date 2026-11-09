function my_book(read,write){ 
    this.read = read; 
    this.write = write; 
}

function Car(model,age){ 
    this.model = model; 
    this.age = age; 

}

// let myCar = new Car("toyota","2yrs"); 
// console.log(myCar); 

function tea(typeOf){ 
    this.typeOf = typeOf; 
    this.describe = function(){
        return `This is a ${this.typeOf} cup.`;
    }
}
let lemonTea = new tea("Tanjumul's tea"); 
console.log(lemonTea.describe()); 


function Animal(species){ 
    this.species = species;
}

Animal.prototype.sound= function(){ 
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog_bark"); 
console.log(dog.sound()); 

function Drink(drinking){ 
    if(!new.target){ 
        throw new Error("You are not using new keyword here");
    }
    this.drinking = drinking; 
}

let Tea =  new Drink("Lamon Tea !"); 
let coffee = Drink("Coffee"); 
