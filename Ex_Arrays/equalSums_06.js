function equalSums(arr) {
    let areNotEqual = true;
     for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        //calculating the left sum
          for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            leftSum += arr[leftIndex];
          }

          //calculating the right sum
          for(let rightIndex = arr.length - 1; rightIndex > i; rightIndex--){
            rightSum += arr[rightIndex];

          }
          if (leftSum === rightSum){
              console.log(i);
              areNotEqual = false;
              break;
          }
     }


     if (areNotEqual){
         console.log('no');
     }

}   
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])

