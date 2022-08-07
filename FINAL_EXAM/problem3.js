function solve3(arr) {
    let obj = {};
    for (let element of arr) {
        if (element === 'End'){
            console.log(`Heroes: `);
            for (const key in obj) {
              console.log(`== ${key}: ${obj[key].join(', ')}`);
            }
            break;
        }
        if (element.includes('Enroll')) {
            let [_, heroName] = element.split(' ');
            if (!obj.hasOwnProperty(heroName)) {
                obj[heroName] = [];
            } else {
                console.log(`${heroName} is already enrolled.`);
            }
        } else if (element.includes('Learn')) {
            let [_, heroName, spell] = element.split(' ');
            if (!obj.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if (obj[heroName].includes(spell)) {
                    console.log(`${heroName} has already learnt ${spell}.`);
                } else {
                    obj[heroName].push(spell);
                }
            }
        } else if (element.includes('Unlearn')) {
            let [_, heroName, spell] = element.split(' ');
            if (!obj.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if (!obj[heroName].includes(spell)) {
                    console.log(`${heroName} doesn't know ${spell}.`);

                } else {
                 
                    for (let i = 0; i < obj[heroName].length; i++) {
                        if (obj[heroName][i] === spell) {
                            obj[heroName][i] = 0;
                        }
                    }
                    obj[heroName] = obj[heroName].filter(x => x !== 0);
                }
            }
        }
    }


}
solve3(["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"]);
console.log('-------------');
solve3(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"]);
console.log('-------------');
solve3(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"]);