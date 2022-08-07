function storage() {
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }
        addProduct(product) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.price * product.quantity; 
        }
        getProducts() {
             return this.storage.map(product => JSON.stringify(product)).join('\n');
            // for (const iterator of this.products) {
            //     output += `${JSON.stringify(iterator)}\n`;
            // }
            // //  for (let i = 0; i < this.products.length; i++) {
            // //     if (this.products.length - i === 1){
            // //         output += `${JSON.stringify(this.products[i])}`;
            // //     } else {
            // //         output += `${JSON.stringify(this.products[i])}\n`;
            // //     }
            // //  }
          //return output;
        }

    }
    let productOne = { name: 'Cucumber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
     console.log(storage.capacity);
     console.log(storage.totalCost);
    // let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
    // let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
    // let storage = new Storage(30);
    // storage.addProduct(productOne);
    // storage.addProduct(productTwo);
    // console.log(storage.totalCost);
    

}
storage();