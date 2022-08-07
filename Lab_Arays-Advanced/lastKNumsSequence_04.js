function lastKNumsSequence(n, k) {
    let arr = [1];
    //n is the length of the sequence, the length of the array
    // it is "n-1" because we have already the first element existing 
    //in the array (which is always one by the task condition) 
     for (let i = 0; i < n - 1; i++) {
         // //1. take the last k elements
        let lastElements = arr.slice(-k);
        // 2. split them
        
        // 3.sum them
        let sum = 0;
         for (let j = 0; j < lastElements.length; j++) {
            sum += lastElements[j];
         } //or with forOf
      
        // 4. add the sum to the arr
        arr.push(sum);
     }
    
     return arr.join(' ');

}
//console.log(lastKNumsSequence(6, 3));
console.log(lastKNumsSequence(8, 2));