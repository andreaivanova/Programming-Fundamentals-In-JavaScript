function pass(arr) {
    let str = arr.shift();
    for (let element of arr) {
        if (element === 'Done') {
            console.log(`Your password is: ${str}`);
            break;
        }
        if (element.includes('TakeOdd')) {
            str = str.split('');
            for (let i = 0; i < str.length; i++) {
                if (i % 2 === 0) {
                    str[i] = 0;
                }
            }
            str = str.filter(x => x !== 0);
            str = str.join('');
            console.log(str);
        } else if (element.includes('Cut')) {
            let [_, index, length] = element.split(' ');
            index = Number(index);
            length = Number(length);
            let part1 = str.slice(0, index);
            let part2 = str.slice(index + length);
            str = part1 + part2;
            console.log(str);
        } else if (element.includes('Substitute')) {
            let [_, substr, substitute] = element.split(' ');
            let hasOccurrences = false;
            if (str.includes(substr)){
                let regex = new RegExp(substr, 'g');
                str = str.replace(regex, substitute);
                hasOccurrences=true;
            }
            if(!hasOccurrences){
                console.log('Nothing to replace!');
                continue;
            } 

            console.log(str);
        }
    }


}
pass((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
);
console.log(`--------------`);
pass((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
);
