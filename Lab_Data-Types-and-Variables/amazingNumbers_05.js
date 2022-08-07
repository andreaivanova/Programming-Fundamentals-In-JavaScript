function amazingNumbers(number) {
    //find sum of all digits
    let numAsString = number.toString()
    let sum = 0;


    for (let i = 0; i < numAsString.length; i++) {
        let currentDigit = Number(numAsString[i]);
        sum += currentDigit;

    }

    //check if sum contains 9
    let sumAsStr = sum.toString();
    let hasNine = false;
    for (let i = 0; i < sumAsStr.length; i++) {
        if (sumAsStr[i] === '9') {
            hasNine = true;
            break;
        }
    }
    // //print result
    // if(hasNine){
    //     console.log(`${number} Amazing? True`);
    // } else {
    //     console.log(`${number} Amazing? False`);
    // }
    console.log(`${number} Amazing? ${hasNine ? 'True' : 'False'}`);

}
amazingNumbers(1233)
amazingNumbers(999)