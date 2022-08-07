function reverseAnArrayOfNums(n, arr) {
    //take slice from original array

    //sending the slice to new array
    let slice = []; //declaration for empty array
    for (let i = 0; i < n; i++) {
        slice.push(arr[i]);

    }
    let result = [];
    //print new array reversed
    for (let i = slice.length; i > 0; i--) {
       result.push(slice[i-1]);
    }

    console.log(result.join(' '));



}
reverseAnArrayOfNums(3, [10, 20, 30, 40, 50])
reverseAnArrayOfNums(4, [-1, 20, 99, 5])
reverseAnArrayOfNums(2, [66, 43, 75, 89, 47])