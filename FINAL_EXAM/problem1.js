function solve1(arr) {
    let text = arr.shift();
    for (let element of arr) {
        if (element === 'Finish') {
            break;
        }
        if (element.includes('Replace')) {
            let [_, currentChar, newChar] = element.split(' ');
            let regex = new RegExp(currentChar, 'g');
            text = text.replace(regex, newChar);
            console.log(text);
        } else if (element.includes('Cut')) {
            let [_, startIndex, endIndex] = element.split(' ');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if (startIndex >= 0 & startIndex < text.length && endIndex >= 0 && endIndex < text.length) {
                let substr = text.substring(startIndex, endIndex + 1);
                //  console.log(substr);
                text = text.replace(substr, '');
            }
            else {
                console.log('Invalid indices!');
                continue;
            }
            console.log(text);

        } else if (element.includes('Make')) {
            let [_, command] = element.split(' ');
            text = text.split('');
            for (let i = 0; i < text.length; i++) {
                if (command === 'Upper') {
                    text[i] = text[i].toUpperCase();
                } else if (command === 'Lower') {
                    text[i] = text[i].toLowerCase();

                }
            }
            text = text.join('');
            console.log(text);
        } else if (element.includes('Check')) {
            let [_, str] = element.split(' ');
            if (text.includes(str)) {
                console.log(`Message contains ${str}`);
            } else {
                console.log(`Message doesn't contain ${str}`);
            }
        } else if (element.includes('Sum')) {
            let [_, startIndex, endIndex] = element.split(' ');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if (startIndex >= 0 & startIndex < text.length && endIndex >= 0 && endIndex < text.length) {
                let substr = text.substring(startIndex, endIndex + 1);
                let sum = 0;
                for (let letter of substr) {
                    sum += letter.charCodeAt(0);
                }
                console.log(sum);
            }
            else {
                console.log('Invalid indices!');
                continue;
            }
        }
    }






}
solve1((["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])
);
console.log('-------------');
solve1((["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"])
);
// DinnerIsServed
// Make Upper
// Check Dinner
// Replace N M
// Finish