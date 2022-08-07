function counterStrike(arr) {
    let initialEnergy = Number(arr[0]);

    let countWonBattles = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 'End of battle') {
            console.log(`Won battles: ${countWonBattles}. Energy left: ${initialEnergy}`);
            break;
        }
        let currentDistance = Number(arr[i]);
      
        if (initialEnergy - currentDistance >= 0) {
            initialEnergy -= currentDistance;
            countWonBattles++;
            if (countWonBattles % 3 === 0) {
                initialEnergy += countWonBattles;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${countWonBattles} won battles and ${initialEnergy} energy`);
            break;
        }
    }



}
counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
);
counterStrike((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])
);
