function movingTarget(input) {
    let arr = input.shift().split(' ');
    arr = arr.map(Number);
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'End') {
            console.log(arr.join('|'));
            break;
        }
        let [command, index, value] = input[i].split(' ');
        index = Number(index);
        value = Number(value);

        let isTheIndexValid = isItInBounds(index);
        if (command === 'Shoot' && isTheIndexValid) {

            let elementToAdd = arr[index] - value;
            arr.splice(index, 1, elementToAdd);
            if (arr[index] <= 0) {
                arr.splice(index, 1);
            }
        } else if (command === 'Add') {
            if (isTheIndexValid) {
                arr.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }
        } else if (command === 'Strike') {
            if (isTheIndexValid) {
                for (let i = index - value; i <= index + value; i++) {
                    if (i < 0 || i >= arr.length){
                        console.log('Strike missed!');
                        break;
                    }
                    arr[i] = 0;
                }
                arr = arr.filter(x => x > 0)

            } else {
                console.log('Strike missed!');
            }
        }
    }

    function isItInBounds(index) {
        if (index >= 0 && index < arr.length) {
            return true;
        } else {
            return false;
        }
    }

}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]
);
movingTarget((["1 2 3 4 5",
    "Strike 0 1",
    "End"])
);