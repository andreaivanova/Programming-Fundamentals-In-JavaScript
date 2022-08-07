function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    return person;
}

let output = personInfo("Peter",
    "Pan",
    "20"
);
console.log(output);
personInfo("George",
    "Smith",
    "18"
);
