function catalogue(arr) {
    let allObjects = {}
    arr = arr.sort((a, b) => a.localeCompare(b));
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        let [name, price] = arr[i].split(' : ');
        price = Number(price)
        let obj = {};
        obj[name] = price;
        allObjects = Object.assign(allObjects, obj)
    }


  //  console.log(allObjects);
    let currentLetter = '';
    for (const key in allObjects) {
        if (key.charAt(0) === currentLetter){
            console.log(`  ${key}: ${allObjects[key]}`);
        } else {
            currentLetter = key.charAt(0);
            console.log(currentLetter);
            console.log(`  ${key}: ${allObjects[key]}`);
        }
    }
}
// catalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);
// console.log(`------------`);
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);;