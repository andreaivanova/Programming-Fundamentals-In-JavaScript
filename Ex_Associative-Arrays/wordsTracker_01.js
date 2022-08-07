function wordsTracker(arr) {
    let [words, ...wordsToCheck] = arr;
    words = words.split(' ');
    obj = {};
    for (const word of words) {
        obj[word] = 0;
    }

    for (const word of wordsToCheck) {
        if (obj.hasOwnProperty(word)) {
            obj[word]++;
        }
    }

    let entries = Object.entries(obj);
    entries.sort((a, b) => b[1] - a[1]);
    
    for (const [word, occurences] of entries) {
        console.log(word, '-', occurences);
    }

}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
console.log(`------------`);
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);