
let baseObject:{width:number, length:number} = { 
	width: 0, 
	length: 0 
}; 
let rectangle:any = Object.create(baseObject); 

rectangle.width = 5; 
rectangle.length = 2; 


rectangle.calcSize = function():number { 
	return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); // 10



// class Baseobject {
// 	constructor (public width:number, public length:number) {
// 		this.width =width
// 		this.length = length
// 	}
// }

// class Rectangle extends Baseobject {
	
// 	constructor(width:number, length:number){
// 		super(width, length)
// 	}
// 	calcSize ():number { 
// 		return this.width * this.length; 
// 	}; 
// }

// let rectangle = new Rectangle(5, 2)

// console.log(rectangle.calcSize()); // 10