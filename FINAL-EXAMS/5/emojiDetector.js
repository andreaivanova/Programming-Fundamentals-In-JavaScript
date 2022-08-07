function emoji(arr) {
    let regex = /(\*\*|\:\:)(?<name>[A-Z][a-z]{2,})\1/g;
    let regexNum = /\d/g;
    let str = arr[0];
    let allMatches = str.matchAll(regex);
    let allMatchesNum = str.matchAll(regexNum);
    let coolThreshold = 1;
    let coolEmojis = [];
    let countEmojis = 0;
    for (let iterator of allMatchesNum) {
        coolThreshold *= Number(iterator[0]);
    }

    for (let iterator of allMatches) {
        let emoji = iterator.groups.name;
        let sumAllLetters = 0;
        countEmojis++;
        for (let i = 0; i < emoji.length; i++) {
            sumAllLetters += emoji.charCodeAt(i);

        }
        if (sumAllLetters >= coolThreshold){
            coolEmojis.push(iterator[0]);
        }
        
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${countEmojis} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join('\n'));
}
emoji(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('---------');
emoji((["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]));
console.log('---------');
emoji(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);