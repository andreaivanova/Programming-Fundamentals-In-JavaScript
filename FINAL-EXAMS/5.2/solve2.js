function solve(arr) {
    let regex = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let allMatches = arr[0].matchAll(regex);
    let regexNum = /\d/g;
    let allMatchesNums = arr[0].matchAll(regexNum);
    let coolThresHold = 1;
    let coolEmojis = [];
    let countAllEmojis = 0;

    for (let element of allMatchesNums) {
        coolThresHold *= Number(element);
    }

    for (let element of allMatches) {
        countAllEmojis++;
        let emoji = element.groups.emoji;
        emoji = emoji.split('');
        let sum = 0;
        for (let i = 0; i < emoji.length; i++) {
            sum += emoji[i].charCodeAt(0);
        }
        emoji=emoji.join('')
        if (sum >= coolThresHold) {
            coolEmojis.push(element[0]);
        }

    }

    console.log(`Cool threshold: ${coolThresHold}\n${countAllEmojis} emojis found in the text. The cool ones are:\n${coolEmojis.join('\n')}`);    

}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('------------');
solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])