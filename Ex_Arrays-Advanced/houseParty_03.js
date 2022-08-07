function houseParty(arr) {
    let guestsArr = [];
   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('is going')) {
            let splittedArr = arr[i].split(' ');
            let guestName = splittedArr.shift();
            if (!guestsArr.includes(guestName)) {
                guestsArr.push(guestName);
               
            } else {
                console.log(`${guestName} is already in the list!`);
            }
        } else if (arr[i].includes('not going')) {
            let splittedArr = arr[i].split(' ');
            let guestName = splittedArr.shift();
            if(!guestsArr.includes(guestName)){
                console.log(`${guestName} is not in the list!`);
            } else {
                guestsArr.pop();
                
            }

        }
    }
    console.log(guestsArr.join('\n'));
}




houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
console.log('~~~~~~~~~~~~~~');
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);