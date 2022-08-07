function sorting(arr) {
   let arrLength = arr.slice();
   let outputArr = [];

   for (let i = 0; i < arrLength.length; i++) {
      let number;
      if (i % 2 === 0) {
         number = Math.max(...arr)
      } else {
         number = Math.min(...arr);
      }
      outputArr.push(number);
      arr.splice(arr.indexOf(number), 1)
   }
   //printing the result
   console.log(outputArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])