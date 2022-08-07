function search(arr, arr2) {
    let takeAmount = arr2[0];
    let deleteAmount = arr2[1];
    let searchingElement = arr2[2];
    let outputArr = arr.slice(0, takeAmount);
    outputArr = outputArr.slice(deleteAmount,outputArr.length)
 //   console.log(outputArr);
    let count = 0;
   for (const element of outputArr) {
       if(element===searchingElement){
        count++;
       }
   }
console.log(`Number ${searchingElement} occurs ${count} times.`);


}
