function add(arr) {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            output.push(i + 1);
        } else if (arr[i] === 'remove') {
            output.pop(i + 1);
        }

    }

    if (output.length === 0) {
        console.log('Empty');
    } else {
        console.log(output.join(' '));
    }

}
add(['add', 'add', 'add', 'add'])
add(['add', 'add', 'remove', 'add', 'add'])
add(['add', 'remove', 'add'])

