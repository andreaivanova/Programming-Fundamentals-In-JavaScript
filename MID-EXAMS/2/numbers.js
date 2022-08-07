function numbers(input) {
    input = input.split(' ');
    //console.log(input);
   input = input.map(Number);
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];

    } 
    let avgNum = sum / input.length;
    let outputArr = input.filter((x,i) => x > avgNum);
    outputArr.sort((a,b)=> b-a);
    outputArr = outputArr.splice(0,5);
    if (outputArr.length === 0){
        console.log('No');
    } else {
        console.log(outputArr.join(' '));
    }

}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');