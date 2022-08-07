function pyramid(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazulli = 0;
    let totalGold = 0;
    let countSteps = 0;

    //dokato ne stignem vyrha
    //dokato nasipnostta ne stane 1x1 ili 2x2
    while (base > 0) {
        countSteps++;
        if (base === 1 || base === 2) {
            totalGold = base * base * increment;
            break;
        }
        let currentStone = ((base - 2) * (base - 2)) * increment;
        totalStone += currentStone;
        if (countSteps % 5 === 0) {
            let currentLapisLazulli = ((base * 4) - 4) * increment;
            totalLapisLazulli += currentLapisLazulli;
        } else {
            let currentMarble = ((base * 4) - 4) * increment;
            totalMarble += currentMarble;
        }
        base -= 2;
    }
    let pyramidHeight = Math.floor(countSteps * increment);
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazulli)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${pyramidHeight}`);
    
}
pyramid(11, 1)
console.log(`~~~~~~~~`);
pyramid(11, 0.75)
console.log(`~~~~~~~~`);
pyramid(12, 1)
console.log(`~~~~~~~~`);
pyramid(23, 0.5)