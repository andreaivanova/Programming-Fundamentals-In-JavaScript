function asciiSumator(arr) {
    let [char1, char2, str] = arr;
    let char1Code = char1.charCodeAt(0);
    let char2Code = char2.charCodeAt(0);
    let strAsArr = str.split('');

    let sum = 0;
    for (let element of strAsArr) {
        if (char1Code < char2Code) {
            if (element.charCodeAt(0) > char1Code && element.charCodeAt(0) < char2Code) {
                sum += element.charCodeAt(0)
            }
        } else {
            if (element.charCodeAt(0) < char1Code && element.charCodeAt(0) > char2Code) {
                sum += element.charCodeAt(0)
            }
        }
    }

console.log(sum);


}
asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']);
asciiSumator(['?',
    'E',
    '@ABCEF']);
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']);