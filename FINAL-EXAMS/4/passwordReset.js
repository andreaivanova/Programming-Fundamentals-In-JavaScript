function passwordReset(arr) {
    let str = arr.shift();
    arr.pop();

    for (let element of arr) {
        if (element.includes('TakeOdd')) {
            str = str.split('');

            for (let i = 0; i < str.length; i++) {
                if (i % 2 == 0) {
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
            let part1 = str.substring(0, index);
            let part2 = str.substring(index + length);
            str = part1 + part2;
            console.log(str);

        } else if (element.includes('Substitute')) {
            let [_, substring, substitute] = element.split(' ');
            if (str.includes(substring)) {
                while (str.includes(substring)) {
                    str = str.replace(substring, substitute);
                }
                console.log(str);
            } else {
                console.log('Nothing to replace!');
            }
        }
    }
    console.log(`Your password is: ${str}`);

}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
);
console.log(`----------`);
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
);