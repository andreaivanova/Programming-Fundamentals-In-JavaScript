function countStringOccurrences(str, wordToSearch){
    let arr = str.split(' ');
    let count = 0;
    for (let element of arr) {
        if (element === wordToSearch){
          count++;
        }
    }
 console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence',
'is');
countStringOccurrences('softuni is great place for learning new programming languages',
'softuni');