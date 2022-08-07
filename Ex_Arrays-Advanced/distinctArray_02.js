function distinctArray(arr) {
    let resultArr = [];
   for (let i = 0; i < arr.length; i++) {
        if(!resultArr.includes(arr[i])){
            resultArr.push(arr[i]);
        }
   }
   console.log(resultArr.join(' '));

}
//distinctArray([1, 2, 3, 4])
//distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
console.log('``````````````');
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
distinctArray([2, 2, 2, 2, 2, 2, 2])