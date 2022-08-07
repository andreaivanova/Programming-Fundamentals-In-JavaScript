function nonDecreasingSubset(arr) {
    let outputArr = [];
    let currentBiggest = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (currentBiggest <= arr[i]) {
            currentBiggest = arr[i];
            outputArr.push(currentBiggest);
            continue;
            //         } else {
            // // (в пример 1)тъй като четворката е по-малка от current biggest number (осмицата)
            // //тя ТРЯБВА да се премахне от масива!
            //              outputArr = arr.filter(function(numbers){
            //                  return numbers > currentBiggest;
            //              })

            //         }



        }

    }
    console.log(outputArr.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([1, 2, 3, 4])
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);