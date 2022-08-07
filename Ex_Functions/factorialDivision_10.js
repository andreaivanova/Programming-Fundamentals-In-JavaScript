function factorialDivision(firstNum, secondNum) {

    function findingFactorial(number){
        let result = 1;
      
        if (number === 0 ||  number === 1){
            return 1;
        } else {
             for (let i = number; i >= 1; i--) {
                result = result * i;
             }
             return result;
        }
        }

    let factorialOfTheFirstNum = findingFactorial(firstNum);
    let factorialOfTheSecondNum = findingFactorial(secondNum);
    
    let finalAnswer = factorialOfTheFirstNum / factorialOfTheSecondNum;
    finalAnswer = finalAnswer.toFixed(2);
    return finalAnswer;
}
let output = factorialDivision(6, 2);
console.log(output);
//factorialDivision(6, 2)
