function sumEvenNums (array){

    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
        
    }
    let sum = 0;
    for(let element of array){
        if (element % 2 === 0){
            sum += element;
        }   
    }
    console.log(sum);
}
sumEvenNums(['1','2','3','4','5','6'])
sumEvenNums(['3','5','7','9'])
sumEvenNums(['2','4','6','8','10'])