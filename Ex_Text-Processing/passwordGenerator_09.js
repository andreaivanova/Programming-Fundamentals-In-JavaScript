function passwordGenerator(arr) {
    let [firstStr, secondStr, thirdStr] = arr;
    let combinedStr = firstStr + secondStr;
    let combinedStrAsArr = combinedStr.split('');
    thirdStr = thirdStr.toUpperCase();
    let thirdStrAsArr = thirdStr.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;


    for (let i = 0; i < combinedStrAsArr.length; i++) {
        // the current letter of the concatenated string is combinedStrAsArr[i]
        if (vowels.includes(combinedStrAsArr[i])) {
            combinedStrAsArr[i] = thirdStrAsArr[index];
            index++;
            if (index >= thirdStrAsArr.length) {
                index = 0;
            }
        }
    }
   // console.log('Your generated password is');
    console.log(`Your generated password is ${combinedStrAsArr.reverse().join('')}`);

}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);
console.log(`--------------`);
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]);
console.log(`--------------`);
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
]);