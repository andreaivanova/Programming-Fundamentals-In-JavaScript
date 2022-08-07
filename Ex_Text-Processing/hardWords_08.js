function hardWords(input) {
    let text = input[0];
    let arr = input[1].sort((a, b) => b.length - a.length); // words
    for (let word of arr) {
        let wordLength = word.length;
        let searchCriteria = '_'.repeat(wordLength);
        if (text.includes(searchCriteria)) {
            text = text.replace(searchCriteria, word);
        }

    }
    console.log(text);

}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);
