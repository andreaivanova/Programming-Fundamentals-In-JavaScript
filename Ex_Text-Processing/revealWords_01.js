function revealWords(wordsToFill, text) {
    let wordsAsArr = wordsToFill.split(', ');
    let textAsArr = text.split(' ');

    for (let word of wordsAsArr) {
        let wordLength = word.length;
        let searchCriteria = '*'.repeat(wordLength)
        if (textAsArr.includes(searchCriteria)) {
             textAsArr.splice(textAsArr.indexOf(searchCriteria), 1, word);
        }
    }
    console.log(textAsArr.join(' '));


}
revealWords('great',
    'softuni is ***** place for learning new programming languages'
);
console.log('--------');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);

revealWords('Andrea, Ivanova, Varna',
    'My name is ****** ******* and I am from *****'
);