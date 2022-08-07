function specialNumbers(n) {
    let sum = 0;
    let isSpecial = false;
    for (let i = 1; i <= n; i++) {
        let j = i;
        let jAsString = j.toString();
        for (let k = 0; k < jAsString.length; k++) {
            let currentDigit = Number(jAsString[k]);
            sum += currentDigit;
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = true;
        } else {
            isSpecial = false;
        }
        sum = 0;
        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }




}
//specialNumbers(15)
specialNumbers(20)