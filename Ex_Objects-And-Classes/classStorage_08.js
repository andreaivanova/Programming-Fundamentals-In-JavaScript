function classStorage() {
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            capacity -= this.quantity;

        }
        storage(products) {
            this.name = name;
            this.price = price;
            this.quantity = this.quantity;
        }
        totalCost() {
            let totalPrice = 0;
            for (const element in this) {
                let cost = element.price;
                totalPrice += cost;
            }
            return totalPrice;
        }
        addProduct(product) {
            Object.assign(this, product);
        }
        getProducts() {
            let output = ``;
            for (const iterator in this) {
                output += `${JSON.stringify(iterator.this)}\n`
            }
            return output;
        }
    }

    let productOne = {name: 'Cucumber', price: 1.50, quantity: 15};
    let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
    let productThree = {name: 'Bread', price: 1.10, quantity: 8};
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);
    

}
classStorage();
