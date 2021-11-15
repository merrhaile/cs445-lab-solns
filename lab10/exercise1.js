

class Regular {
    constructor(name){
        this.name =name
    }
}

class Energy {
    constructor(name, color){
        this.name =name
        this.color = color
    }
}

class Factory {
    createBulb(name, color) {
        let bulb;
        switch(name){
            case "regular" : bulb = new Regular(name)
            break;
            case "energy" : bulb = new Energy(name, color)
            break;
        }
        this.blub = bulb;
        return bulb
    }
}

const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));

for (let i = 0; i < bulbs.length; i++) {
    console.log(bulbs[i]);
}