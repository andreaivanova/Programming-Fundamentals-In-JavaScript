function maxSequence(arr) {
   let output = [];
   for (let i = 0; i < arr.length; i++) {
      let currentArr = [arr[i]];
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[i] === arr[j]) {
            currentArr.push(arr[j]);
         } else {
            break;
         }
      }
      if (output.length < currentArr.length){
         output = currentArr;
      }

   }

   console.log(output.join(' '));

}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])
