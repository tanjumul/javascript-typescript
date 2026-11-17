//getters and setters ... see the inheritance.js code file also ! 

class Employee {
    #salary;
    constructor(name , salary){ 
        if(salary < 0){ 
            throw new Error("Salary Can't be in negative here !");
            
        }
        this.name = name; 
        this.#salary = salary; 
    }
    get salary(){
        return `Nothing is here, You are not allowed to see this Salary !`;
    }
    set salary(value){ 
            if(value < 0){
                console.error("Invalid Salary Here ");
            } else { 
                this._salary = value;
            }
    }
}

let emp = new Employee("Alice", -50000); 
console.log(emp._salary); 

emp.salary = -60000; 