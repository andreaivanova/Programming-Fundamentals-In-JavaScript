function numberModification(number) {
    let numAsArr = number.toString().split('');
    
    let sum = 0;
    let amountOfDigits = numAsArr.length;
    for (let i = 0; i < numAsArr.length; i++) {
        let currentNum = Number(numAsArr[i]);
        sum += currentNum;
    }
    let averageValueOfAllDigits = sum / amountOfDigits;
    if (averageValueOfAllDigits > 5) {
        return number;
    }

    while (averageValueOfAllDigits <= 5) {
        sum += 9;
        numAsArr.push('9');
        amountOfDigits++;
        averageValueOfAllDigits = sum / amountOfDigits;
    }
    let arrOutput = numAsArr.join(''); 
    return arrOutput;
}
let output = numberModification(5835);
console.log(output);
//numberModification(5835);