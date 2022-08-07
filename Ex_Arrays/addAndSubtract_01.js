function addAndSubtract(arr) {
    let modifiedArr = [];
    let sumArr = 0; // sum array
    let sumModArr = 0; //sum modified array
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
        if (arr[i] % 2 === 0){
            modifiedArr.push(arr[i] + i);
        } else {
            modifiedArr.push(arr[i] - i);


        }
        sumModArr += modifiedArr[i];
     }

     console.log(modifiedArr);
     console.log(sumArr);
     console.log(sumModArr);

}
addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])
//addAndSubtract()