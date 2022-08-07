function negativeOrPositiveNumbers(arr){
    let result = [];
     for (let i = 0; i < arr.length; i++) {
         let currentElement = arr[i];
        if (currentElement < 0){
            result.unshift(currentElement);
        } else {
            result.push(currentElement);
        }
     }
// it can also be done with forOf loop because we dont need the index
console.log(result.join('\n'));

}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);