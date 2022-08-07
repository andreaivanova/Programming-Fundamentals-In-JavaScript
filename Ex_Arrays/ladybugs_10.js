TODO
function ladybugs(arr) {
    let n = arr.shift();
    let field = (new Array(n)).fill(0);
    let ladybugIndexes = arr.shift().split(' ');
     for (let index of ladybugIndexes) {
        field9
     }
    
    //parse field
    for (const iterator of arr) {
        //parse command
        //if direction is right - add offset to current index
        //if direction is left (otherwise) - subtract from current index

        // repeat fly operation until:
        //- found empty cell or
        //- end of field
    }

    //print result

}
ladybugs([3, '0 1', '0 right 1', '2 right 1'])
console.log('``````````````');
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])
console.log('``````````````');
ladybugs([5, '3', '3 left 2', '1 left -2'])
