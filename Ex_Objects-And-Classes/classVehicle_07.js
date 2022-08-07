function classVehicle(){
    class Vehicle {
        constructor(type, model, parts, fuel){
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.fuel = fuel;
            this.parts.quality = parts.engine * parts.power;
        }
        drive(fuelLoss){
            this.fuel -= fuelLoss;
            return this.fuel;
        }

    }
    let parts = {engine: 9, 
        power: 500};
        parts.quality = parts.engine * parts.power;
    let vehicle = new Vehicle('l', 'k', parts, 840);
    vehicle.drive(20);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);



}
classVehicle();
