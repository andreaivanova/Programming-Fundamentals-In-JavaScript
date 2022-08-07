function place (string, char, match){
    // iterate all characters inside string and replace '_' with char

    let temporary = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '_'){
            temporary += char;
        } else {
            temporary += string[i];
        }
    }



    if (temporary === match){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }



}
place('Str_ng', 'i', 'String')
