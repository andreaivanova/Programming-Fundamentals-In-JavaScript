function heartDelivery(input) {
    let arr = input.shift()
    .split('@')
    .map(Number);
    let indexOfTheHouse = 1;
    let lastPosition = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Love!') {
            console.log(`Cupid's last position was ${lastPosition}.`);
            break;
        }
        let [command, step] = input[i].split(' ');
        step = Number(step);
        for (let j = step; j < arr.length; j += step) {

            if (arr[j] - 2 === 0) {
                console.log(`Place ${indexOfTheHouse} has Valentine's day.`);
                
            }
            if (arr[j] === 0) {
                console.log(`Place ${indexOfTheHouse} already had Valentine's day.`);
                continue;
            }
            if (j + step >= arr.length) {
                j = 0;
                indexOfTheHouse = 0;
                arr[j] -= 2;
                continue;
            }
            arr[j] -= 2;
            indexOfTheHouse++;
            lastPosition = j;

        }
    }
  


}
heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);
console.log('~~~~~~~~~~~~~');
// heartDelivery(["2@4@2",
//     "Jump 2",
//     "Jump 2",
//     "Jump 8",
//     "Jump 3",
//     "Jump 1",
//     "Love!"])
