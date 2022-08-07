function treasureFinder(str) {
    str = str.split(' ').filter(x => x !== '');
    for (let element of str) {
        let elAsArr = element.split('');
        let firstLetter = elAsArr.shift();
        let lastLetter = elAsArr.pop();
        let number = Number(elAsArr.join(''));

    }


}
treasureFinder('A12b s17G');
// treasureFinder('P34562Z q2576f   H456z');
// treasureFinder('a1A');