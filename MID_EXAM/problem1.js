function solve(arr) {
    arr = arr.map(Number);
    let [biscuitsPerDayPerWorker, totalWorkers, totalBuscuitsCompetingFactory] = arr;
    let totalProduction = 0;
    let isBigger = false;
    for (let i = 1; i <= 30; i++) {

        if (i % 3 === 0) {
            totalProduction += Math.floor((biscuitsPerDayPerWorker * totalWorkers) * 0.75);
        } else {
            totalProduction += biscuitsPerDayPerWorker * totalWorkers;
        }
    }
    let diff = totalProduction - totalBuscuitsCompetingFactory;
    let percent = 0;
    if (diff > 0) {
        percent = diff / totalBuscuitsCompetingFactory * 100;
        isBigger = true;
    } else {
        diff = Math.abs(diff);
        percent = diff / totalBuscuitsCompetingFactory * 100;

    }
    console.log(`You have produced ${totalProduction} biscuits for the past month.`);
    if (isBigger) {
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);

    }
}
// solve(["78",
//     "8",
//     "16000"])
// console.log(`'''''''''`)
// solve(["65",
//     "12",
//     "26000"])
console.log(`'''''''''`)
solve(["85",
    "8",
    "67020"])
