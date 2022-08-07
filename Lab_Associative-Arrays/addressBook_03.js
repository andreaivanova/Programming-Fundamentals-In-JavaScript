function addressBook(arr) {
    let obj = {};
    for (let element of arr) {
        let [name, address] = element.split(':');
        obj[name] = address;
    }
    let objAsArr = Object.entries(obj);
    objAsArr.sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, address] of objAsArr) {
        console.log(name, '->', address);
    }
/*
    let objKeys = Object.keys(obj);
    objKeys.sort((a, b) => a.localeCompare(b));
    for (const name of objKeys) {
        console.log(name, '->', obj[name]);
    }
    */

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
console.log('----------------');
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);
