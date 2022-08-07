function stringSubstring(word, str){
    word = word.toLowerCase();
    str = str.toLowerCase();
    str = str.split(' ');
    let isFound = false;
    for (const element of str) {
        if (element === word){
            console.log(word);
            isFound = true;
            break;
        }
    }
    
    if (!isFound){
        console.log(word, 'not found!');
    }

}
stringSubstring('javascript',
'JavaScript is the best programming language'
);
console.log('-------');
stringSubstring('python',
'JavaScript is the best programming language'
);