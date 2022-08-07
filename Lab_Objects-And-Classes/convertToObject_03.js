function convertToObject(jsonText){
    let obj = JSON.parse(jsonText); //object
    let keys = Object.keys(obj); //array
    for (const key of keys) {
        console.log(`${key}: ${obj[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')