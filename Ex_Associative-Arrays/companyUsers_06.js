function companyUsers(arr) {
    let obj = {};

    for (let element of arr) {
        let [company, employee] = element.split(' -> ');
        if (!obj.hasOwnProperty(company)) {
            obj[company] = [];
        }
        if (!obj[company].includes(employee)) {
            obj[company] = obj[company].concat(employee);
        }
    }

    let output = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]));

    output.forEach(x => {
        console.log(x[0]);
        x[1].forEach(y => console.log('--', y))
    })

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
);
console.log('-------------');
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]
);