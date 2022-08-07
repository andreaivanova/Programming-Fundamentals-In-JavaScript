function mirror(arr) {
    let regex = /(\#|@)(?<match>[A-Za-z]{3,})\1\1(?<match2>[A-Za-z]{3,})\1/g
    let allMatches = arr[0].matchAll(regex);
    let allWords = [];
    let countPairs = 0;
    let areTherePairs = false;
    for (const iterator of allMatches) {
        allWords.push(iterator.groups.match);
        allWords.push(iterator.groups.match2);
        countPairs++;
    }
    
    let output = [];
    for (let i = 0; i < allWords.length; i += 2) {
        let currentWord = allWords[i];
        let nextWord = allWords[i + 1];
        nextWord = nextWord.split('');
        nextWord = nextWord.reverse().join('');
        if (currentWord === nextWord){
            areTherePairs = true;
            nextWord = nextWord.split('');
            nextWord = nextWord.reverse().join('');
            output.push([currentWord, nextWord]);
        }
    }
    if(countPairs > 0){
        console.log(`${countPairs} word pairs found!`);

    } else {
        console.log(`No word pairs found!`);
    }
    if(output.length > 0){

        let outputToPrint = '';
        console.log('The mirror words are:');
        for (let i = 0; i < output.length; i++) {
            output[i] = output[i].join(' <=> ')
           //console.log(output[i]);
        }
        output =  output.join(', ');
        console.log(output);
    } else {
        console.log('No mirror words!');
    }


}
mirror([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log('-------');
mirror(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('-------');
mirror(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);