function condense(arr) {
    //for every element in the array, 
    //sum with the next element, 
    //except the last one
    //while the array has more than 1 element
    let condensed = [];
    for (let n of arr) {
        condensed.push(n);
    }
    
    let temp = [];
    while (condensed.length > 1) {
        for (let i = 0; i < condensed.length - 1; i++) {
            temp.push(condensed[i] + condensed[i + 1]);
        }
        condensed = temp;
        temp = [];
    }

    console.log(condensed.join(''));




}
condense([2, 10, 3])
condense([5, 0, 4, 1, 2])
condense([1])