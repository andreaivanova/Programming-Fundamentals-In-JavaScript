function arenaTier(arr) {
    let obj = {};
    for (let element of arr) {
        if (element === 'Ave Cesar') {
            break;
        }
        if (element.includes('->')) {
            let [name, technique, skill] = element.split(' -> ');
            skill = Number(skill);

            //check whether the property already exists or not
            if (!obj.hasOwnProperty(name)) {
                obj[name] = {};
            }
            //add the technique and the skill if they don't exist

            if (!obj[name].hasOwnProperty(technique)) {
                obj[name][technique] = skill;
            } else {

                //check which skill is lower
                if (obj[name][technique] < skill) {
                    obj[name][technique] = skill;
                }
            }
        } else if (element.includes('vs')) {
            let [gladiator1, gladiator2] = element.split(' vs ');
            //check whether both gladiators exist or not
            if (obj.hasOwnProperty(gladiator1) && obj.hasOwnProperty(gladiator2)) {
                let keysOfGladiator1 = Object.keys(obj[gladiator1]);
                let keysOfGladiator2 = Object.keys(obj[gladiator2]);
                let valuesOfGladiator1 = Object.values(obj[gladiator1]);
                let valuesOfGladiator2 = Object.values(obj[gladiator2]);
                let flag = false; //do both gladiators have at least one technique in common?
                for (let i = 0; i < keysOfGladiator1.length; i++) {
                    for (let j = 0; j < keysOfGladiator2.length; j++) {
                        if (keysOfGladiator1[i] === keysOfGladiator2[j]) {
                            flag = true;
                            if (flag) {
                                if (valuesOfGladiator1[i] > valuesOfGladiator2[j]) {
                                    delete obj[gladiator2];
                                } else {
                                    delete obj[gladiator1];
                                }
                            }
                            break;
                        }
                    }
                }
            }
        }
    }

    for (let key in obj) {
        let sum = 0;
        let nestedObj = obj[key];
        for (let insideKey in nestedObj) {
            sum += nestedObj[insideKey];
        }
        nestedObj['sum'] = sum;
    }
 //   console.table(obj);
    Object.entries(obj)
        .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
        .forEach(x => {
            console.log(`${x[0]}: ${x[1].sum} skill`);
            delete x[1].sum;
            Object.entries(x[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(y => {
                    console.log(`- ${y[0]} <!> ${y[1]}`);
                })
        })


}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
console.log('---------');
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);