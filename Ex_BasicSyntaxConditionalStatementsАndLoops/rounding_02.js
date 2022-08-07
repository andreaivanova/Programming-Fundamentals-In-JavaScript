function rounding(number, precision){
    if (precision > 15){
        precision = 15;
    }
    let roundedNumber = number.toFixed(precision);
    let withoutZeros = parseFloat(roundedNumber);
    console.log(withoutZeros);


}
rounding(13.563956932658922142263189645, 20)
rounding(10.5, 3)