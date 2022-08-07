function arrayModifier(input) {
    let arr = input.shift().split(' ');
    arr = arr.map(Number);
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'end') {
            break;
        }
        let [command, index1, index2] = input[i].split(' ');
        index1 = Number(index1);
        index2 = Number(index2);
        switch (command) {
            case 'swap':
                arr = swapElements(arr, index1, index2);
                break;
            case 'multiply':
                arr = multiplyElements(arr, index1, index2);
                break;
            case 'decrease':
                arr = arr.map(x => x - 1);
                break;

        }
    }
    console.log(arr.join(', '));
    function swapElements(arr, firstIndex, secondIndex) {
        let temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
        return arr;
    }
    function multiplyElements(arr, firstIndex, secondIndex) {
        let firstElement = arr[firstIndex];
        let secondElement = arr[secondIndex];
        let result = firstElement * secondElement;
        arr.splice(firstIndex, 1, result);
        return arr;
    }
    // function decreaseElements(arr){
    //    arr = arr.map(x=>x-1); 
    // }
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  );