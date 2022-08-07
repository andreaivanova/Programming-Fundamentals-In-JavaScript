function palindromeIntegers(arr) {
    
    for (const number of arr) {
        let numAsString = number.toString();
        let reversedNumAsString = numAsString.split('').reverse().join('');
        if(numAsString === reversedNumAsString){
            console.log('true');
        } else {
            console.log('false');
        }


    }


    //  let isPalindrome = true;
    // for (let i = 0; i < arr.length; i++) {
    //     let currentNum = arr.shift();
    //     let numAsString = currentNum.toString();
    //     let numAsArr = numAsString.split('');
    //     //console.log(arrReversed);
    //     let arrReversed = [];
    //     for (let j = numAsArr.length - 1; j >= 0; j--) {
    //         arrReversed.push(numAsArr[j]);
    //     }
    //     numAsArr.reverse();
    //       for (let k = 0; k < numAsArr.length; k++) {
    //         if (numAsArr[k] !== arrReversed[k]){
    //             isPalindrome = false;
    //             console.log('false');
    //             break;
    //         }
    //       }
    //       if (isPalindrome){
    //         console.log('true');
    //       }
    //       isPalindrome = true;

    //     // if (JSON.stringify(numAsArr) == JSON.stringify(arrReversed)) {
    //     //     console.log('true');
    //     // } else {
    //     //     console.log('false');
    //     // }
    //     //  if (isPalindrome){
    //     //      console.log('true');
    //     //  } else {
    //     //      console.log('false');
    //     //  }
    //     //  isPalindrome = true;


}
//palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);
