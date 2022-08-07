function dayOfWeek(dayAsNumber) {
    let daysOfTheWeek = ['Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'];
    // // или:
    // // let index = dayAsNumber - 1;
    // // days[index]
    if (dayAsNumber >= 1 && dayAsNumber <= 7) {
        console.log(daysOfTheWeek[dayAsNumber - 1]);
    } else {
        console.log('Invalid day!');
    }

    // return dayAsNumber >= 1 && dayAsNumber <= 7 ? ['Monday',
    //     'Tuesday',
    //     'Wednesday',
    //     'Thursday',
    //     'Friday',
    //     'Saturday',
    //     'Sunday'][dayAsNumber - 1] : 'Invalid day!';



}
dayOfWeek(3)
dayOfWeek(6)
dayOfWeek(11)