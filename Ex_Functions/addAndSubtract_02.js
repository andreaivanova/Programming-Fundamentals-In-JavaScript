function addAndSubtract(a, b, c) {
    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b, c) {
        return a + b - c;
    }

    let sumOfAAndB = sum(a, b);
    let subtraction = subtract(a, b, c);
    return subtraction;

}
console.log(addAndSubtract(23,
    6,
    10
));
console.log(addAndSubtract(1,
    17,
    30
));
console.log(addAndSubtract(42,
    58,
    100
));