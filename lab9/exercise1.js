

class ShoppingCart {
    #basket = [];
    constructor(){}

    upsertItem(newItem) { 
        this.#basket.forEach((item) => {
            if(item.id === newItem.id){
                this.#basket.splice(this.#basket.indexOf(item), 1)
            }
        })
        this.#basket.push(newItem)
    }

    getItemsCount(){
        return this.#basket.length
    }

    getTotalPrice(){
      let result = 0;
        this.#basket
            .forEach(item => {
               result += item.product.price * item.count
            })
        return result;
    }

    removeItemById(id){
        let index
        this.#basket.forEach(item =>{
            if(item.id === id) index = this.#basket.indexOf(item);
        })

        this.#basket.splice(index, 1)
    }
}

const item1 = { id: 0, product: {id: 1, name: 'Coffee', description: 'Coffee Grounds from Ethiopia', price: 9 }, count: 1 }
const item2 = { id: 1, product: { id: 2, name: 'Tea', description: 'Oonlong Tea from China', price: 10 }, count: 5 }
const item3 = { id: 2, product: { id: 3, name: 'Bottled Water', description: 'Bottled Water from US', price: 2 }, count: 30 }

const shoppingCart = new ShoppingCart()
shoppingCart.upsertItem(item1);
shoppingCart.upsertItem(item2);
shoppingCart.upsertItem(item3);

console.log(shoppingCart.getTotalPrice())

item3.product.name = 'Himilayan Water';
item3.product.price = 10;
shoppingCart.upsertItem(item3);


console.log(shoppingCart.getItemsCount());
console.log(shoppingCart.getTotalPrice());

shoppingCart.removeItemById(1);
console.log(shoppingCart.getItemsCount());
console.log(shoppingCart.getTotalPrice()); 