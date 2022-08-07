function print(arr) {
    let step = arr.pop();
    step = Number(step);
    let output = ``;
   
    for (let i = 0; i < arr.length; i += step) {
        output += `${arr[i]} `;
        
    }
    console.log(output);




}
print(['5', '20', '31', '4', '20', '2'])
print(['dsa', 'asd', 'test', 'test', '2'])
print(['1', '2', '3', '4', '5', '6'])