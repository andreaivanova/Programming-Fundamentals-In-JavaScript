//alternative solution to the 1st problem:
function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
   // person['firstName'] = firstName;
    person.lastName = lastName;
    person.age = age;

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
