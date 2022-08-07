function flightSchedule(input) {
    let allFlights = input[0];
    let statuses = input[1];
    let statusThatNeedsToBeChecked = input[2];
    let obj = {};
    let flightStatus = 'Ready to fly';


    for (let i = 0; i < allFlights.length; i++) {
        let currentElement = allFlights[i];
        let [flightNumber, ...destination] = currentElement.split(' ');
        destination = destination.join(' ');
        obj[flightNumber] = {
            Destination: destination,
            Status: flightStatus,
        }
    }


    for (let element of statuses) {
        let [flightNumber, newStatus] = element.split(' ');
        if (obj.hasOwnProperty(flightNumber)) {
            obj[flightNumber].Status = newStatus;
        }
    }


    if (statusThatNeedsToBeChecked.includes('Ready to fly')) {
       for (let flightNum in obj) {
           if (obj[flightNum].Status === 'Ready to fly'){
               console.log(obj[flightNum]);
           }
       }
    } else {
        for (let flightNum in obj) {
            if (obj[flightNum].Status !== 'Ready to fly'){
                console.log(obj[flightNum]);
            }
        }
    }
}
// flightSchedule([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK430 Cancelled'],
// ['Cancelled']
// ]
// );
//console.log('--------------');
// flightSchedule([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK330 Cancelled'],
// ['Ready to fly']
// ]
// );