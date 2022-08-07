function rotate(arr){
    let rotations = arr.pop();
     for (let i = 0; i < rotations; i++) {
        let tempEl = ''; //temporary element
        tempEl = arr.pop();
        arr.unshift(tempEl);

     }
     console.log(arr.join(' '));


}
rotate(['1', '2', '3', '4', '2'])
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15'])