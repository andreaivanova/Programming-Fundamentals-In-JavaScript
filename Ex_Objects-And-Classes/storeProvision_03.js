function storeProvision(currentStock, products) {
    let store = {};

    for (let i = 0; i < currentStock.length - 1; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        //store.product = quantity;
        store[product] = quantity;

    }
    for (let i = 0; i < products.length - 1; i += 2) {
        let product = products[i];
        let quantity = Number(products[i + 1]);
        if(store.hasOwnProperty(product)){
            store[product]+=quantity;
        } else {
            store[product] = quantity;
        }
        
    }
    let keysOfStore = Object.keys(store);
    for (const key of keysOfStore) {
        console.log(`${key} -> ${store[key]}`);
    }
}


storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
console.log(`------------------`);
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);