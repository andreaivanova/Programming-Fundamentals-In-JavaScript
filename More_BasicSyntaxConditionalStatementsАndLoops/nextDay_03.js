function nextDay(year, month, day) {
    let nextDay = new Date(year, month - 1, day + 1) // removing one unit from the month because the 
    //month updates to next one after the current.
    let newYear = nextDay.getFullYear()
    let newMonth = nextDay.getMonth() + 1; //now adding one unit to go to the current month, respectively
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay(2000, 11, 21)
