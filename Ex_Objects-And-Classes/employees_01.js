function employees(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentName = arr[i];
        let currentNameLength = currentName.length;

        let obj = {};
        obj.name = currentName;
        obj.personalNumber = currentNameLength;
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);


     }
    

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
console.log(`~~~~~~~~~~~~~~~~~~`);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
);
