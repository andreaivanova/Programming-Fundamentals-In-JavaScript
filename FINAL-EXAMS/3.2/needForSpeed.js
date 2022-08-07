function needForSpeed(arr) {
    let n = Number(arr.shift());
    let obj = {};
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = arr[i].split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        obj[car] = [mileage, fuel];
    }
    //console.table(obj);
    for (let j = n; j < arr.length; j++) {
        if (arr[j] === 'Stop') {
            for (const car in obj) {
                console.log(`${car} -> Mileage: ${obj[car][0]} kms, Fuel in the tank: ${obj[car][1]} lt.`);
            }
            break;
        }
        if (arr[j].includes('Drive')) {
            let [_, car, distance, fuel] = arr[j].split(' : ');
            distance = Number(distance);
            fuel = Number(fuel);
            if (obj[car][1] >= fuel) {
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                obj[car][0] += distance;
                obj[car][1] -= fuel;
                if (obj[car][0] >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete obj[car];
                }
            } else {
                console.log('Not enough fuel to make that ride');
            }


        } else if (arr[j].includes('Refuel')) {
            let [_, car, fuel] = arr[j].split(' : ');
            fuel = Number(fuel);
            let diff = 75 - obj[car][1];
            if (obj[car][1] + fuel > 75) {
                obj[car][1] = 75;
                console.log(`${car} refueled with ${diff} liters`);
            } else {
                obj[car][1] += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }
        } else if (arr[j].includes('Revert')) {
            let [_, car, km] = arr[j].split(' : ');
            km = Number(km);
            obj[car][0] -= km;
            if (obj[car][0] < 10000) {
                obj[car][0] = 10000;
            } else {
                console.log(`${car} mileage decreased by ${km} kilometers`);
            }
        }
    }

}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
console.log(`-----`);
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);
