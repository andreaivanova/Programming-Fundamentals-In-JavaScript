function race(arr) {
    let names = arr.shift();
    let obj = {};
    for (let element of arr) {
        if (element === 'end of race') {
            break;
        }
        let regexName = /(?<name>[A-Z]+)/gi;
        let regexKM = /\d/g;
        let name = element.match(regexName);
        name = name.join('');
        let km = element.match(regexKM);
        km = km.map(Number);
        km = km.reduce((x, y) => x + y);
        if (names.includes(name)) {
            if (!obj.hasOwnProperty(name)) {
                obj[name] = km;
            } else {
                obj[name] += km;
            }
        }
    }
    let sortedEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    console.log('1st place:', sortedEntries[0][0]);
    console.log('2nd place:', sortedEntries[1][0]);
    console.log('3rd place:', sortedEntries[2][0]);
    
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);
console.log('--------')
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
);
