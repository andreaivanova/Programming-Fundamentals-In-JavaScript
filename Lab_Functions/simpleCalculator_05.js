function simpleCalculator(a, b, operator) {
    let multiply = (a, b) => a * b;
    let add = (a, b) => a + b;
    let divide = (a, b) => a / b;
    let subtract = (a, b) => a - b;
    switch (operator) {
        case 'multiply':
            console.log(multiply(a,b));
            break;
        case 'add':
            console.log(add(a,b));
            break;
        case 'divide':
            console.log(divide(a,b));
            break;
        case 'subtract':
            console.log(subtract(a,b));
            break;

    }

    // function multiply(a, b) {
    //     return a * b;
    // }
    // function divide(a, b) {
    //     return a / b;
    // }
    // function add(a, b) {
    //     return a + b;
    // }
    // function subtract(a, b) {
    //     return a - b;
    // }


}
simpleCalculator(5,
    5,
    'multiply'
)
simpleCalculator(40,
    8,
    'divide'
    
)
simpleCalculator(12,
    19,
    'add'
    
)
simpleCalculator(50,
    13,
    'subtract'
    
)
