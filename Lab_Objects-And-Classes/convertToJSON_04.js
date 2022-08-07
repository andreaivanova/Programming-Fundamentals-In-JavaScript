function convertToJSON(firstName, lastName, hairColour){
    let obj = {};
    obj.name = firstName;
    obj.lastName = lastName;
    obj.hairColor = hairColour;
    let objAsJSON = JSON.stringify(obj);
    console.log(objAsJSON);


}
convertToJSON('George', 'Jones', 'Brown')
convertToJSON('Peter', 'Smith', 'Blond')