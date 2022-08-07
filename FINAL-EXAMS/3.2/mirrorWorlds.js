function mirrorWorlds(arr) {
    let regex = /(@|\#)(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;
    let allMatches = arr[0].matchAll(regex);
    let count = 0;
    let output = [];
    for (const iterator of allMatches) {
        if (iterator.groups.word1 === iterator.groups.word2.split('').reverse().join('')) {
            output.push(iterator.groups.word1 + ' <=> ' + iterator.groups.word2)
        }
        count++;
    }
    if (count > 0) {
        console.log(count, 'word pairs found!');
    } else {
        console.log('No word pairs found!');
    }
    if (output.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(output.join(', '));
    }
}
mirrorWorlds(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
console.log('-----------');
mirrorWorlds(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('-----------');
mirrorWorlds(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);