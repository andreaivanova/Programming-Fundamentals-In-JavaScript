function problemCity(obj){
    let props = Object.keys(obj);
    for (const prop of props) {
       console.log(`${prop} -> ${obj[prop]}`);     
    }



}
problemCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);
console.log(`~~~~~~~~~~`);
problemCity({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)