function blackFlag(arr) {
    arr = arr.map(Number);
    let [days, plunderPerDay, expectedPlunder] = arr;
    let plunderPerDayInHalf = plunderPerDay / 2;
    let totalPlunder = 0;
    for (let i = 1; i <= days; i++) {
        totalPlunder += plunderPerDay;
        if (i % 3 === 0) {
            totalPlunder += plunderPerDayInHalf;
        }
        if (i % 5 === 0) {
            totalPlunder -= totalPlunder * 0.30;
        }
    }
    let percentage = totalPlunder / expectedPlunder * 100;
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }



}
blackFlag(["5",
    "40",
    "100"])
blackFlag(["10",
    "20",
    "380"])