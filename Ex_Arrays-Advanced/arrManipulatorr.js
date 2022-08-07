function manipulatorArr(arrInts, arrCommands) {
    for (let i = 0; i < arrCommands.length; i++) {
        let elementsArr = arrCommands[i].split(' ');
        let command = elementsArr.shift();
        if (command === 'add') {
            add(elementsArr[0], elementsArr[1]);


        }
        else if (command === 'addMany') {
            let index = elementsArr.shift();
            elementsArr = elementsArr.map(x => Number(x));
            addMany(index, elementsArr);

        } else if (command === 'contains') {
            elementsArr = Number(elementsArr);
            let outputOfContains = contains(elementsArr);
            console.log(outputOfContains);
        }
        //  else if (command === 'remove'){
        //     remove(elementsArr);
        // } else if (command === 'shift'){
        //     shiftPositions(elementsArr);
        // } else if (command === 'sumPairs'){
        //     sumPairs(arrInts);
        // } else if (command === 'print'){
        //    console.log(arr.join(', ')); 
        //    break;

        // }

    }
    function add(index, element) {
        element = Number(element);
        let result = arrInts.splice(index, 0, element);
        return result;
    }
    function addMany(index, arr) {
        arrInts.splice(index, 0, ...arr)
        return arrInts;
    }
    function contains(element) {
        for (let i = 0; i < arrInts.length; i++) {
            if (element[0] === arrInts[i]) {
                return arrInts.indexOf(number);
            } else {
                return -1;
            }
        }
    }

}
manipulatorArr([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)
// manipulatorArr([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// )