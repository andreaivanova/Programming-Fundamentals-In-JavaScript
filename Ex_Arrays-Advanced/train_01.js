function train(arr) {
    let originalArr = arr.shift()
        .split(' ')
        .map(x => Number(x));
    let maxCapacity = Number(arr.shift());
    for (let element of arr) {
        if (element.includes('Add')) {
            let [command, number] = element.split(' ');
            number = Number(number);
            originalArr.push(number);
        } else {
            element = Number(element);
            for (let i = 0; i < originalArr.length; i++) {
                if (originalArr[i] + element <= maxCapacity) {
                    originalArr[i] += element;
                    break;
                }

            }

        }
    }
    console.log(originalArr.join(' '));
}
// train(['32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75']
// );
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])