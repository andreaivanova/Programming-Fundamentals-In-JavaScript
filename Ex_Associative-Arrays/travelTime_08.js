function travelTime(arr) {
    let obj = {};

    for (let element of arr) {
        let [country, town, cost] = element.split(' > ');
        cost = Number(cost);
        //if the country doesn't exist:
        if (!obj.hasOwnProperty(country)) {
            obj[country] = {};
        }
        //if the country exists:
        //if the town doesn't exist:
        if (!obj[country].hasOwnProperty(town)) {
            obj[country][town] = cost;
        } else {
            //if the town exists:
            //check which offer is cheaper:
            if (obj[country][town] > cost) {
                obj[country][town] = cost;
            }
        }
    }

    let sortedCountries = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]))

    for (let [country, towns] of sortedCountries) {
        let result = ``;
        let output = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        for (const [town, cost] of output) {
            result += `${town} -> ${cost} `
        }
        console.log(country + ' -> ' + result);
    }

}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
console.log('-----------');
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);