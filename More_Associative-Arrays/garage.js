function garage(array) {
    let resultObj = {};
 
    for (let line of array) {
        let [garageNum, carInfo] = line.split(' - ');
        carInfo = carInfo.split(': ').join(' - ');
        if (resultObj.hasOwnProperty(garageNum)) {
            resultObj[garageNum].push(carInfo);
        } else {
            resultObj[garageNum] = [carInfo];
        }
    }
    let entries = Object.entries(resultObj);
    for (let line of entries) {
        let garageNum = line.shift();
        console.log(`Garage № ${garageNum}`);
        for (let carArr of line) {
            for (let carInfo of carArr) {
                console.log(`--- ${carInfo}`)
            }
        }
    }
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
console.log('------------');
// garage(['1 - color: green, fuel type: petrol',
// '1 - color: dark red, manufacture: WV',
// '2 - fuel type: diesel',
// '3 - color: dark blue, fuel type: petrol']
// );