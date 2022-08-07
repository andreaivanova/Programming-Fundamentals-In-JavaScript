function deserializeString(arr) {

    let allIndexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'end') {
            break;
        }
        let [letter, indexes] = arr[i].split(':');
        indexes = indexes.split('/').map(Number);
        allIndexes = allIndexes.concat(indexes);

    }


    let arrLength = Math.max(...allIndexes) + 1;
    let newArr = [...Array(arrLength).keys()]

    allIndexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'end') {
            break;
        }
        let [letter, indexes] = arr[i].split(':');
        indexes = indexes.split('/').map(Number);
        allIndexes = allIndexes.concat(indexes);

        for (const index of indexes) {
            newArr.splice(index, 1, letter);
        }

    }
    console.log(newArr.join(''));

}
deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end']);
console.log('--------');
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'])