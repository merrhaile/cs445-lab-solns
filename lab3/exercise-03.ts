
interface carInterface {
    name:string
    acceleration:number
    honk():void
    accelerate(speed:number): void
}
class Car implements carInterface{
    name:string
    acceleration:number
    
    constructor(name:string) {
        this.name = name;
        this.acceleration = 0;
    }
    honk(){
        console.log(`${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed:number) {
        this.acceleration = this.acceleration + speed;
    }
}

let car:Car = new Car("BMW");
car.honk(); 
console.log(car.acceleration); 
car.accelerate(60);
console.log(car.acceleration);