function integerOrFloat(a, b, c) {
    let sum = a + b + c;
    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
    // alternative solution:
    // let sum = a + b + c;
    // let rounded = Math.round(sum);
    // if (sum === rounded){
    //     console.log(`${sum} - Integer`);
    // } else{
    //     console.log(`${sum} - Float`);
    // }

}
integerOrFloat(7.5, 2, 5)
integerOrFloat(2, 3, 5)