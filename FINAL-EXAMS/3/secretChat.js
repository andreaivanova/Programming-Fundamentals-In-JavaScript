function secretChat(arr) {
    let str = arr.shift();
    for (let element of arr) {
        if (element === 'Reveal') {
            break;
        }
        if (element.includes('InsertSpace')) {
            let [_, index] = element.split(':|:');
            str = str.split('');
            str.splice(index, 0, ' ');
            str = str.join('');
        } else if (element.includes('Reverse')) {
            let [_, substringToCut] = element.split(':|:');
            if (str.includes(substringToCut)) {
                let index = str.indexOf(substringToCut);
                let length = substringToCut.length;
                let part1 = str.substring(0, index);
                let part2 = str.substring(index + length);
                str = part1 + part2;
                substringToCut = substringToCut.split('').reverse().join('');
                str += substringToCut;
            } else {
                console.log('error');
                continue;
            }
        } else if (element.includes('ChangeAll')) {
            let [_, substring, replacement] = element.split(':|:');

            let regex = new RegExp(substring, 'g');
            str = str.replace(regex, replacement);
        }
        console.log(str);

    }
    console.log(`You have a new text message: ${str}`);

    // let [_,substring, replacement] = element.split(':|:');

    //let regex = new RegExp(substring, 'g');
    // while(str.includes(substring))
    // str = str.replace(substring, replacement);

}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
);
console.log('--------');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);