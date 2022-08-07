function arrayManipulator(arr, commands) {
    let commandsLength = commands.length;
    for (let i = 0; i < commandsLength; i++) {
        let currentCommand = commands.shift().split(' ');
       // currentCommand[2] = Number(currentCommand[2]);

        if (currentCommand[0] === 'add') {
            currentCommand[2] = Number(currentCommand[2]);
            arr.splice(currentCommand[1], 0, currentCommand[2]);
        } else if (currentCommand[0] === 'addMany') {
            let newArr = currentCommand.slice(1);
            let mappedArr = newArr.map(x=>Number(x));
            for (let j = 0; j < mappedArr.length; j++) {
                arr.splice(j, 0, mappedArr[j]);
            }

        } else if (currentCommand[0] === 'contains') {
            let isFound = false;
            for (let k = 2; k < arr.length; k++) {
                if (currentCommand[1] === arr[i]) {
                    console.log(i);
                    true;
                    break;
                }
            }
            if (!isFound) {
                console.log('-1');
            }

        } else if (currentCommand[0] === 'remove') {
            arr.splice(currentCommand[1], 1);
        } else if (currentCommand[0] === 'shift') {
            for (let l = 0; l < currentCommand[1]; l++) {
                let lastElement = arr.pop();
                let pushFirstElement = arr.unshift(lastElement);
            }

        } else if (currentCommand[0] === 'sumPairs') {
            let sum = 0;
         
            for (let m = 0; m < arr.length; m += 2) {
                let currentElementValue = arr[m] + arr[m+1];
                arr.splice(m,2,currentElementValue);
            }
        } else if (currentCommand[0] === 'print') {
            console.log('[ '+ arr.join(', ') + ' ]');
            break;
        }






    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);
console.log('``````````');
// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
// )