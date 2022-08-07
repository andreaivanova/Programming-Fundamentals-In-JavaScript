function smallestTwoNumbers(arr) {
    let output = arr.sort((a, b) => a - b).slice(0, 2).join(' ');
    return output;


}
console.log(smallestTwoNumbers([30, 15, 50, 5]))
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]))