function letters(str) {
    str = str.split(' ').filter(x => x !== '');
    let sum = 0;
    for (let element of str) {
        let elAsArr = element.split('');
        let firstLetter = elAsArr.shift();
        let lastLetter = elAsArr.pop();
        let number = Number(elAsArr.join(''));
        let alphabetPositionOfFirstLetter = firstLetter.toLowerCase().charCodeAt(0) - 96;
        let alphabetPositionOfLastLetter = lastLetter.toLowerCase().charCodeAt(0) - 96;
        let tempResult =  number;
        if (firstLetter === firstLetter.toUpperCase()){
           tempResult /= alphabetPositionOfFirstLetter;
        } else {
            tempResult *= alphabetPositionOfFirstLetter;
        }

        if (lastLetter === lastLetter.toUpperCase()){
            tempResult -= alphabetPositionOfLastLetter;
        } else {
            tempResult += alphabetPositionOfLastLetter;
        }

        sum += tempResult;

    }

    console.log(sum.toFixed(2));
}
letters('A12b s17G');
 letters('P34562Z q2576f   H456z');
 letters('a1A');