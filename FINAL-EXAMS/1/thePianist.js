function pianist(arr) {
    let n = Number(arr.shift());
    let obj = {};
    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = arr[i].split('|')
        obj[piece] = [composer, key];
    }

    for (let j = n; j < arr.length; j++) {
        if (arr[j] === 'Stop') {
            break;
        }
        if (arr[j].includes('Add')) {
            let [_, piece, composer, key] = arr[j].split('|');
            if (obj.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                obj[piece] = [composer, key];
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (arr[j].includes('Remove')) {
            let [_, piece] = arr[j].split('|');
            if (obj.hasOwnProperty(piece)) {
                delete obj[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (arr[j].includes('ChangeKey')) {
            let [_, piece, newKey] = arr[j].split('|');
            if (obj.hasOwnProperty(piece)) {
                obj[piece][1] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    for (const key in obj) {
        console.log(`${key} -> Composer: ${obj[key][0]}, Key: ${obj[key][1]}`);
    }
}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);
console.log('-----------');
pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
);