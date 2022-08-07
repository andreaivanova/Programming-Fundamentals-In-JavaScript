function modernTimes(str){
    let strAsArr = str.split(' ');
    let outputArr = [];
    let flag = false;
    for (let word of strAsArr) {
        flag = false;
        if (word.startsWith('#') && word.length > 1){
            word = word.split('');
            for (let letter of word) {
              letter = Number(letter);
              if (!isNaN(letter)){
                  flag = true;
              }  
            } 
            if (flag){
                continue;
            }
            word.shift();
            word = word.join('');
           
            outputArr.push(word);
            
        }
    }
    console.log(outputArr.join('\n'));


}
modernTimes('Nowadays everyone uses #123 to tag a #special123 word in #socialMedia');
console.log('-----------');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');