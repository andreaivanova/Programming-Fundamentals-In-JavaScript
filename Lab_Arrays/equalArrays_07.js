function equalArrays(arr1, arr2) {
    let areNotEqual = false;
    for (let k = 0; k < arr1.length; k++) {
        if (arr1[k] !== arr2[k]) {
            areNotEqual = true;
            console.log(`Arrays are not identical. Found difference at ${k} index`);
            break;
        }
    }

    let sum = 0;

    if (!areNotEqual) {
        for (let i = 0; i < arr1.length; i++) {
            arr1[i] = Number(arr1[i]);
            sum += arr1[i];
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
   
}
equalArrays(['10', '20', '30'], ['10', '20', '30'])
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
equalArrays(['1'], ['10'])
