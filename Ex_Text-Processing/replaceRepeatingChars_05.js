function replaceRepeatingChars(str) {
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                break;
            }
            arr[j] = 0;
        }

    }
    console.log(arr.filter(x => x !== 0).join(''));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');