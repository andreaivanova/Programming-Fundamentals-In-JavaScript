function activation(arr) {
    let activationKey = arr.shift();
    for (let element of arr) {
        if (element === 'Generate') {
            console.log(`Your activation key is: ${activationKey}`);
            break;
        }
        if (element.includes('Contains')) {
            let [_, substr] = element.split('>>>');
            if (activationKey.includes(substr)) {
                console.log(`${activationKey} contains ${substr}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (element.includes('Flip')) {
            let [_, type, startIndex, endIndex] = element.split('>>>');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            activationKey = activationKey.split('');
            for (let i = startIndex; i < endIndex; i++) {
                if (type === 'Upper') {
                    activationKey[i] = activationKey[i].toUpperCase();
                } else if (type === 'Lower') {
                    activationKey[i] = activationKey[i].toLowerCase();
                }
            }
            activationKey = activationKey.join('');
            console.log(activationKey);
        } else if (element.includes('Slice')) {
            let [_, startIndex, endIndex] = element.split('>>>');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let part1 = activationKey.slice(0, startIndex);
            let part2 = activationKey.slice(endIndex);
            activationKey = part1 + part2;
            console.log(activationKey);
        }
    }


}
activation((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
);
console.log('----------');
activation((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
);