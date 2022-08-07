function chat(arr) {
    let message = arr.shift();
    for (let element of arr) {
        if (element === 'Reveal') {
            console.log(`You have a new text message: ${message}`);
            break;
        }
        if (element.includes('InsertSpace')) {
            let [_, index] = element.split(':|:');
            index = Number(index);
            message = message.split('');
            message.splice(index, 0, ' ');
            message = message.join('');
            console.log(message);
        } else if (element.includes('Reverse')) {
            let [_, substr] = element.split(':|:');
            if (message.includes(substr)) {
                
                message = message.replace(substr,'');
                message = message.split('');
                message = message.filter(x => x !== '');
                substr = substr
                    .split('')
                    .reverse()
                    .join('');
                message.push(substr);
                message = message.join('');
                console.log(message);
            } else {
                console.log('error');
            }


        } else if (element.includes('ChangeAll')) {
            let [_, substr, replacement] = element.split(':|:');
            let regex = new RegExp(substr, 'g');
            message = message.replace(regex, replacement);
            console.log(message);
        }
    }



}
chat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('-------------');
chat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
chat([
    'aerdnAaerdnAaerdnA',
    'InsertSpace:|:6',
    'Reverse:|:aerdnA',
    'Reveal'
])