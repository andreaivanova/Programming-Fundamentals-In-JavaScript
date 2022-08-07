function calculator(x, operator, y) {
    let result = 0; // or "let result;" it can be left undefined if later on a value will be defined to the variable;
    // switch (operator) {
    //     case '+':
    //         result = x + y;
    //         break;
    //     case '-':
    //         result = x - y;
    //         break;
    //     case '/':
    //         result = x / y;
    //         break;
    //     case '*':
    //         result = x * y;
    //         break;


    // }
    result = eval(`${x} ${operator} ${y}`)
    console.log(`${result.toFixed(2)}`);



}
calculator(5,
    '+',
    17
)
calculator(30,
    '/',
    2
)