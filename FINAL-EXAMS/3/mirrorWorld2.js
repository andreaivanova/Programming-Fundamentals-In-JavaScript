function mirror(arr) {
   // let regex = /(\#|@)(?<match>[A-Za-z]{3,})\1(\#|@)(?<match2>[A-Za-z]{3,})\1/g
    let regex = /([#@])(?<match>[A-Za-z]+)\1\1(?<match2>[A-Za-z]+)\1/g
    //let regex = /(@|\#)(?<match>[A-Za-z]{3,})\1\1(?<match2>[A-Za-z]{3,})\1/g;
    let allMatches = arr[0].matchAll(regex);
    let pairs = [];
    let countWordPairs = 0;
    let areTherePairs = false;
    for (const iterator of allMatches) {
        countWordPairs++;
        let firstMatch = iterator.groups.match;
        let secondMatch = iterator.groups.match2;
        secondMatch = secondMatch.split('')
            .reverse()
            .join('');
        if (firstMatch === secondMatch) {
            secondMatch = secondMatch.split('')
            .reverse()
            .join('');
            pairs.push(`${firstMatch} <=> ${secondMatch}`);
          
            areTherePairs = true;
        }
        
    }
    if (countWordPairs > 0){
        console.log(`${countWordPairs} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }

    if (areTherePairs){
         console.log(`The mirror words are:\n${pairs.join(', ')}`);
    } else {
        console.log(`No mirror words!`);
    }


}
// mirror([
//     '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
// ]);
// console.log('-------');
// mirror(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
// console.log('-------');
// mirror(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);

mirror(['@Andrea@@aerdnA@#Valentina##janitnelaV#'])