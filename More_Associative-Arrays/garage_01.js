function garage(arr) {
    let obj = {};

    for (let element of arr) {
        let [garageNumber, garageInfo] = element.split(' - ');
        let arrOfGarageInfo = [];
        garageInfo = garageInfo.split(', ')
        garageInfo.forEach(x => {
            // let element = x.split(', ')
            x = x.split(': ');
            arrOfGarageInfo.push(x);
        })
        arrOfGarageInfo = Object.fromEntries(arrOfGarageInfo);
        //if the garage doesn't exist
        if (!obj.hasOwnProperty(garageNumber)) {
            obj[garageNumber] = [];
        }

        //if the garage exists
        if (!obj[garageNumber].hasOwnProperty(arrOfGarageInfo)) {
            obj[garageNumber].push(arrOfGarageInfo);
        }
    }

    for (let key in obj) {

        let output = ``;
        for (let element of obj[key]) {
            output += `--- `
            for (const key in element) {
                output += `${key} - ${element[key]}, `;
            }
            output = output.replace(/,\s*$/, '');
            if (obj[key].length - obj[key].indexOf(element) === 1) {
                output += ``;
            } else {
                output += `\n`

            }
        }
        output = output.replace(/,\s*$/, '');

        console.log(`Garage № ${key}\n${output}`


        );
    }
 
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
console.log('------------');
// garage(['1 - color: green, fuel type: petrol',
// '1 - color: dark red, manufacture: WV',
// '2 - fuel type: diesel',
// '3 - color: dark blue, fuel type: petrol']
// );