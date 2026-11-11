/**
 * this is the difference of Constractor and an method
 * // Constructor
function Person(name) {
    this.name = name;
}

// Method
Person.prototype.speak = function() {
    return `Hello, I am ${this.name}`;
};

// Creating an object
let user = new Person("Tanjumul");

// Calling a method
console.log(user.speak());
 */

// constractor :

function Person(name) {
  this.name = name;
  //  return `teamSpeak ${this.name}`;
}

Person.prototype.speak = function () {
  return `Please return the money !`;
};

let user = new Person("Tanjumul");
// console.log(user);
console.log(user.speak());

class vehicle {
  constructor(model, make) {
    this.model = model;
    this.make = make;
  }

  start() {
    return `This is defining ${this.model} , ${this.make}`;
  }
}

//Tanjumul starting and learning :  inheritance

class Car extends vehicle {
  drive() {
    return `${this.make}: This is an inheritance Example; & this is the model:${this.model};`;
  }
}

let myCar = new Car("Nissan", "GTR");
console.log(myCar.drive(), myCar.start());

//Encapsulation;

class BankAccount {
  #balance = 5000;

  deposite(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  gerBalance() {
    return `Your balance is $ ${this.#balance}`;
  }
}

let account = new BankAccount();

console.log(account.gerBalance());

//Abstraction

class CoffeeMachine {
  //complex codes

  starts() {
    return `Machine is Starting ... `;
  }

  brewing_coffee() {
    return `Brewing Coffee Now !`;
  }

  OneStartPressButton() {
    let btnOne = this.starts();
    let btnTwo = this.brewing_coffee();
    return `${btnOne} &  ${btnTwo}`;
  }
}

let coffee_brake = new CoffeeMachine();

console.log(coffee_brake.OneStartPressButton());

//Polymorphisma :

class Bird {
  fly(bird) {
    this.bird = bird;
    return `${this.bird} Flying .... !`;
  }
}

class Penguine extends Bird {
  fly(bird) {
    this.bird = bird;
    return `Penguine can't fly ! `;
  }
}

class cow extends Bird{
    fly(){ 
        return  `Cows ! can't fly!`;
    }
}

let bird = new Bird();
let penguine = new Penguine();
let Cow = new cow(); 

console.log(bird.fly("Kokil"));
console.log(penguine.fly());
console.log(Cow.fly()) 