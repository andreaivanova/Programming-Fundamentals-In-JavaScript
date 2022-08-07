function activationKeys(arr) {
    let key = arr.shift();
    for (let element of arr) {
        if (element === ('Generate')) {
            break;
        }
        if (element.includes('Contains')) {
            let [_, substr] = element.split('>>>');
            if (key.includes(substr)) {
                console.log(`${key} contains ${substr}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (element.includes('Flip')) {
            let [_, command, startIndex, endIndex] = element.split('>>>');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            key = key.split('');
            for (let i = startIndex; i < endIndex; i++) {
                if (command === 'Upper') {
                    key[i] = key[i].toUpperCase();
                } else if (command === 'Lower') {
                   key[i] = key[i].toLowerCase();
                }
            }
            key = key.join('');
            console.log(key);
        } else if (element.includes('Slice')) {
            let [_, startIndex, endIndex] = element.split('>>>');
            let part1 = key.slice(0, startIndex);
            let part2 = key.slice(endIndex);
            key = part1 + part2;
            console.log(key);
        }
    }

    console.log('Your activation key is:', key);
}
activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
);
console.log(`----------`);
activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
);