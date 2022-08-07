function sequences(arr) {
    let newArr = []; // the input arrays after parsing them
    for (let i = 0; i < arr.length; i++) {
        let currentInput = arr[i];
        currentInput = JSON.parse(currentInput);
        newArr.push(currentInput);
    }
    let allArrSorted = newArr.slice(); // the elements of each array sorted in ascending order
    allArrSorted.forEach(element => {
        element.sort((a, b) => a - b);
    });
    let outputArr = allArrSorted.slice();
    // comparing the arrays
    for (let j = 0; j < allArrSorted.length; j++) { 
        let currentArr = JSON.stringify(allArrSorted[j]);
        if (outputArr.length === 1) {
            break;
        }
        for (let k = j + 1; k < allArrSorted.length; k++) {
            let arrBeingComparedTo = JSON.stringify(allArrSorted[k]);
            if (currentArr === arrBeingComparedTo) {
                let index = outputArr.indexOf(allArrSorted[k]);
                outputArr.splice(index, 1);
            }
        }
    }
    // the elements of each array sorted in descending order
   outputArr.forEach(element => {
        element.sort((a, b) => b - a);
    });
    // sorting the arrays by length
    outputArr.sort((a, b) => {
        let criteria = a.length - b.length;
        return criteria;
    })
    //printing the result
    outputArr.forEach(element => {
        console.log(`[${element.join(', ')}]`);
    });
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]);
sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
)