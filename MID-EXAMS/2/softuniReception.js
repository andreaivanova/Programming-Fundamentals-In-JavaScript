function softuniReception(arr) {
    arr = arr.map(Number);
    let employee1 = arr[0]; 
    let employee2 = arr[1]; 
    let employee3 = arr[2]; 
    let students = arr[3];
    let hour = 0;
    while (students > 0) {
        hour++;
        if (hour % 4 === 0){
            continue;
        }
        students -= employee1;
        students -= employee2;
        students -= employee3;

    }
console.log(`Time needed: ${hour}h.`);
}
softuniReception(['5', '6', '4', '20'])
softuniReception(['1', '2', '3', '45'])
softuniReception(['3', '2', '5', '40'])