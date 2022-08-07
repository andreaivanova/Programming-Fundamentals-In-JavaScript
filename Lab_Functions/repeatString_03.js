function repeatString(input, n){
    let output = ``;
     for (let i = 0; i < n; i++) {
        output += `${input}`;
     }
     return output;

}
console.log(repeatString("abc", 3))
console.log(repeatString("String", 5))