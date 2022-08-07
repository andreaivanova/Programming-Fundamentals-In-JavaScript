function sumDigits(number) {
    let numberAsString = String(number);
    let sum = 0;
    for (const element of numberAsString) {
        sum += Number(element);
    }

    console.log(sum);
}
sumDigits(245678)