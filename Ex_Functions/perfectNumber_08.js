function perfectNumber(number) {
    function sumAllProperDivisors(number) {
        let sum = 0;
        for (let i = 0; i < number; i++) {
            if (i === number) {
                break;
            }
            if (number % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
    function isItPerfect(number, sum){
        if (number === sum){
            return true;
        } else {
            return false;
        }
    }
    let sum = sumAllProperDivisors(number);
    let isTheNumberPerfect = isItPerfect(number, sum);
    if (isTheNumberPerfect){
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}
perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)