function censoredWords(str, replaceWord){
    while(str.includes(replaceWord)){
       str = str.replace(replaceWord, '*'.repeat(replaceWord.length))
    }
    console.log(str);


} 
censoredWords('A small sentence with small words', 'small');
censoredWords('Find the hidden hidden', 'hidden');