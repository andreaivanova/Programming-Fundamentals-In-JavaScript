function lift(arr) {
    let waitingPeople = arr.shift();
    let wagons = arr[0].split(' ');
    wagons = wagons.map(Number);

    for (let i = 0; i < wagons.length; i++) {
        if (waitingPeople <= 0) {
            break;
        }
        for (let j = wagons[i]; j < 4; j++) {
            wagons[i]++;
            waitingPeople--;
            if (waitingPeople <= 0) {
                break;
            }
        }

    }
    if (waitingPeople <= 0 && wagons.includes(0) || wagons.includes(1) || wagons.includes(2) || wagons.includes(3)) {
        console.log(`The lift has empty spots!\n${wagons.join(' ')}`);
    } else if (waitingPeople > 0 && !wagons.includes(0)) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!\n${wagons.join(' ')}`);
    } else if (!wagons.includes(0) && waitingPeople <= 0) {
        console.log(wagons.join(' '));
    }

}



lift([
    "15",
    "0 0 0 0"
]
)
lift([
    "20",
    "0 2 0"
]
)