class Vehicle {
    constructor(make, model, year){
        this.make= make;
        this.model= model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`MAke: ${this.year}.`);
         

    }
}

//let myVehicle = new Vehicle(Nissan, Juke, 2015);
//myVehicle.Information();

class cars extends Vehicle{
    constructor(make, model, year, doors){
        super(make,model,year);
        this.doors = doors;
    }
     
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}.`);
    }
    
}

let myCar = new cars('VW','Golf',2010,5);
myCar.Information();


