function storage(arr) {
    let map = new Map();
    for (let element of arr) {
        let [item, quantity] = element.split(' ');
        quantity = Number(quantity);
        if (map.has(item)) {
            let originalQuantity = map.get(item);
            quantity += originalQuantity;
            map.set(item, quantity)
        } else {
            map.set(item, quantity);
        }
    }

    /*
      for (let element of arr) {
        let [item, quantity] = element.split(' ');
        quantity = Number(quantity);
        let existing = 0;
        if (map.has(item)) {
            existing = map.get(item);
        }
        map.set(item, quantity + existing)
    }
    */
    //let iterator = Array.from(map.keys());
    for (const [product, quantity] of map) {
        console.log(product, '->', quantity);
    }
    
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);
console.log(`--------------`);
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
);