function game(arr) {
    let message = arr.shift();
    for (let element of arr) {
        if (element === 'Decode') {
            break;
        }
        if (element.includes('ChangeAll')) {
            let [_, substring, replacement] = element.split('|');
            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
        } else if (element.includes('Insert')) {
            let [_, index, value] = element.split('|');
            message = message.split('');
            message.splice(index, 0, value);
            message = message.join('')
        } else if (element.includes('Move')) {
            let [_, n] = element.split('|');
            n = Number(n);
            let count = 0;
            message = message.split('');
             while(true){
                if (count === n){
                    break;
                }
                let takenLetter = message.shift();
                message.push(takenLetter);
                count++;
                
             }
             message = message.join('');
        }
    }
    console.log('The decrypted message is:', message);

}
game([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
);
console.log('-------');
game([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
);