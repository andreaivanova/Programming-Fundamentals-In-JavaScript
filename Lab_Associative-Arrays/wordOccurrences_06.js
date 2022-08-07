function word(arr) {
    let obj = {};


    for (const word of arr) {
        if (obj.hasOwnProperty(word)) {
            obj[word]++;
        } else {
            obj[word] = 1;
        }
    }

    let entries = Object.entries(obj);
    entries.sort((a, b) => b[1]-a[1]);
    
    for (const [word, occurences] of entries) {
        console.log(word, '->', occurences, 'times');
    }

}
word(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log(`--------------`);
word(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);