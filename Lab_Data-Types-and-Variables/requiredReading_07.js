function requiredReading(currentBookPages, pagesRead1Hour, days) {
    let totalTime = currentBookPages / pagesRead1Hour;
    let hoursPerDay = totalTime / days;
    console.log(hoursPerDay);



}
requiredReading(212,
    20,
    2)
requiredReading(432, 15, 4)