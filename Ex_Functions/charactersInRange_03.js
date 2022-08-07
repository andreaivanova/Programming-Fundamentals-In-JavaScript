function charactersInRange(firstChar, secondChar) {
    let min = firstChar;
    let max = secondChar;
    let firstCharAsNum = firstChar.charCodeAt(0);
    let secondCharAsNum = secondChar.charCodeAt(0);
    if (firstCharAsNum >= secondCharAsNum){
        max = firstChar;
        min = secondChar;
    }
    let output = '';
    let minAsNum = min.charCodeAt(0);
    let maxAsNum = max.charCodeAt(0);
    
     for (let i = minAsNum + 1; i < maxAsNum; i++) {
    
        output += `${String.fromCharCode(i)} `
     }
    
     return output;
   
}
let result = charactersInRange('C',
'#'
)
console.log(result);