function meetings(arr) {
    let assocArr = {};
    for (let element of arr) {
        let [day, name] = element.split(' ');
        if (assocArr.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        assocArr[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    for (let [key, value] of Object.entries(assocArr)) {
        console.log(`${key} -> ${value}`);
    }


}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);
console.log('-----------');
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);