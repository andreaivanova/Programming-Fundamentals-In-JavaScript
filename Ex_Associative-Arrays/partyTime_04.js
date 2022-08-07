function partyTime(arr) {
    let arrOfVIP = [];
    let arrOfRegular = [];
    // let obj = {
    //     VIP: arrOfVIP,
    //     Regular: arrOfRegular,
    // };

    for (let element of arr) {
        if (element === 'PARTY') {
            break;
        }
        let arrOfElement = element.slice().split('');
        let firstChar = Number(arrOfElement.shift());
        if (!isNaN(firstChar)) {
            arrOfVIP.push(element);
        } else {
            arrOfRegular.push(element);
        }

    }

    let startingIndex = arr.indexOf('PARTY') + 1;
    for (let i = startingIndex; i < arr.length; i++) {
        let currentGuest = arr[i];
        if (arrOfVIP.includes(currentGuest)) {
            let index = arrOfVIP.indexOf(currentGuest);
            arrOfVIP.splice(index, 1);
        } else if (arrOfRegular.includes(currentGuest)) {

            let index = arrOfRegular.indexOf(currentGuest);
            arrOfRegular.splice(index, 1);
        }
    }
    console.log(arrOfVIP.length + arrOfRegular.length);
    arrOfVIP.forEach(element => console.log(element));
    arrOfRegular.forEach(element => console.log(element))

}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);
console.log('-----------');
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
);