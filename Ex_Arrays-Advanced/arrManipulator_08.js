function manipulatorArr(arrInts, arrCommands){
    
    function add(index, element){
        element = Number(element);
        let result = arrInts.splice(index, 0, element);
        return result;
    }

    function addMany(index, ...arr){
        arrInts.splice(index, 0, ...arr)
        return arrInts;
    }
    function contains(element){
        // for (const number of arrInts) {
        //     if (element === number){
        //         return arrInts.indexOf(number);
        //     } else {
        //         return '-1';
        //     }
        // }
        // if (arrInts.includes(element[0])){
        //     let index = arrInts.indexOf(element[0]);
        //     return index;
        // } else{
        //     return '-1';
        // }
        return arrInts.indexOf(element); 

    }
    function remove(index){
        return arrInts.splice(index,1);
    }

    function shiftPositions(positions){
        for (let j = 0; j < positions; j++) {
            let element =  arrInts.shift();
            arrInts.push(element);
        }
        return arrInts;
    }
    // function sumPairs(arr){
    //     let newArr = [];
    //      for (let k = 0; k < arr.length; k+=2) {
    //         let sum = arr[k] + arr[k+1];
    //         newArr.push(sum);
    //      }
    //      return newArr;
    // }

    function sumPairs(arr){
        let newArr = [];
         for (let k = 0; k < arr.length; k+=2) {
            if(k != arr.length-1){
            let sum = arr[k] + arr[k+1];
            newArr.push(sum);
          } else {
              newArr.push(arr[k])
}
         }
         return newArr;
    }
 for (let i = 0; i < arrCommands.length; i++) {
    let currentCommandArr = arrCommands[i].split(' ');
    let currentCommand = currentCommandArr.shift();
    if (currentCommand === 'add'){
        add(currentCommandArr[0], currentCommandArr[1]);
    
    } else if (currentCommand ==='addMany'){
        let index = currentCommandArr.shift();
        currentCommandArr = currentCommandArr.map(x=>Number(x));
        addMany(index, ...currentCommandArr);

    } else if(currentCommand === 'contains'){
        currentCommandArr = Number(currentCommandArr);
       let outputOfContainsFunc = contains(currentCommandArr);
        console.log(outputOfContainsFunc);
    } else if (currentCommand === 'remove'){
        remove(currentCommandArr);
    } else if (currentCommand === 'shift'){
        shiftPositions(currentCommandArr);
    } else if (currentCommand === 'sumPairs'){
       arrInts= sumPairs(arrInts);
    } else if (currentCommand === 'print'){
       
       console.log('[ '+ arrInts.join(', ') + ' ]');
       break;
        
    }

 }

}
 manipulatorArr([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    )


// manipulatorArr([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
//     )
// manipulatorArr([2, 2, 4, 2, 4],
// ["add 1 4", "sumPairs", "print"])