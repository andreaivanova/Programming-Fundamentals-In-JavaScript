function piccolo(arr) {
    let obj = {};

    for (let element of arr) {
        let [command, carNum] = element.split(', ');
        if (command === 'IN') {
            obj[carNum] = command;
        } else {
            delete obj[carNum];
        }
    }

    let keys = Object.keys(obj);
    keys.sort((a, b) => a.localeCompare(b));
    if (keys.length === 0) {
        console.log('Parking Lot is Empty');
        return;
    }
    keys.forEach(element => {
        console.log(element);
    });

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
console.log('--------------');
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);