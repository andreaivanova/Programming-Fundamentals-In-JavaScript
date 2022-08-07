function oddAndEvenSum(number) {
    let numAsString = number.toString();
    let stringAsArr = numAsString.split('');
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < stringAsArr.length; i++) {
        let currentNumber = Number(stringAsArr[i]);
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }
    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return result;
}
let output = oddAndEvenSum(1000435);
console.log(output);