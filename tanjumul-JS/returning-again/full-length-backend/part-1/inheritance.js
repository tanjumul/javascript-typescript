class vehicle {
    constructor(model, make) {
        this.model = model;
        this.make =make; 
    }

    start(){ 
        return `This is defining ${this.model} , ${this.make}`;
    }
}

//Tanjumul starting and learning :  inheritance 

class Car extends vehicle { 
    drive(){
        return `${this.make}: This is an inheritance Example; & this is the model:${this.model};`
    }
}

let myCar = new Car("Nissan","GTR"); 
console.log(myCar.drive(), myCar.start()); 