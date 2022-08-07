function spiceMustFlow(yield) {
    let countDays = 0;
    let totalExtractedPieces = 0;
    let currentDayExtractedPieces = yield;
    while (yield >= 100) {
        countDays++;
        currentDayExtractedPieces = yield;
        currentDayExtractedPieces -= 26;
        totalExtractedPieces += currentDayExtractedPieces;

        yield -= 10;
    }
    if (totalExtractedPieces >= 26) { 
        totalExtractedPieces -= 26; 
    }

    console.log(countDays);
    console.log(totalExtractedPieces);

}
spiceMustFlow(111)
spiceMustFlow(450)
