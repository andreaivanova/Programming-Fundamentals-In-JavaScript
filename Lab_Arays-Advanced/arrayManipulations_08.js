function arrayManipulations(input){
    let arr = input.shift()
    .split(' ')
    .map(Number);
   
     for (let i = 0; i < input.length; i++) {
        let [command, number, index] = input[i].split(' ');
        number = Number(number);
        index = Number(index);
        if (command === 'Add'){
            arr.push(number);
        } else if (command === 'Remove'){
           arr = arr.filter(x => x !== number);
        } else if(command === 'RemoveAt'){
            arr.splice(number, 1);
        } else if (command === 'Insert'){
            arr.splice(index, 0, number);
        }
        
     }
    
     return arr.join(' ');
    
}
console.log(arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
));
console.log(arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
));