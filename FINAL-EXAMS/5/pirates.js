function pirates(arr) {

    let obj = {};
    for (let element of arr) {
        let currentCity = arr.shift();
        if (currentCity === 'Sail') {
            break;
        }
        let [city, population, gold] = currentCity.split('||');
        population = Number(population);
        gold = Number(gold);
        if (!obj.hasOwnProperty(city)) {
            obj[city] = [population, gold];
        } else {
            obj[city][0] += population;
            obj[city][1] += gold;
        }
    }
    for (let element of arr) {
        if (element === 'End') {
            let keys = Object.keys(obj);
            if (keys.length > 0) {
                console.log(`Ahoy, Captain! There are ${keys.length} wealthy settlements to go to:`);
                for (const key in obj) {
                   console.log(`${key} -> Population: ${obj[key][0]} citizens, Gold: ${obj[key][1]} kg`);
                }
                
            } else {
                console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
            }
            break;
        }
        if (element.includes('Plunder')) {
            let [_, city, population, gold] = element.split('=>');
            population = Number(population);
            gold = Number(gold);
            obj[city][0] -= population;
            obj[city][1] -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
            if (obj[city][0] <= 0 || obj[city][1] <= 0) {
                delete obj[city];
                console.log(`${city} has been wiped off the map!`);
            }

        } else if (element.includes('Prosper')) {
            let [_, city, gold] = element.split('=>');
            gold = Number(gold);
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
                continue;
            }
            obj[city][1] += gold;
            console.log(`${gold} gold added to the city treasury. ${city} now has ${obj[city][1]} gold.`);
        }
    }


}
pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
);
console.log('----------');
pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
);