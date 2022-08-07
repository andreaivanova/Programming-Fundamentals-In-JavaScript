function heroes(arr) {
    let n = arr.shift();
    let obj = {};
    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = arr[i].split(' ');
        hp = Number(hp);
        mp = Number(mp);
        obj[name] = [hp, mp];
    }

    for (let j = n; j < arr.length; j++) {
        if (arr[j] === 'End') {
            for (const name in obj) {
                console.log(`${name}`);
                console.log(`  HP: ${obj[name][0]}`);
                console.log(`  MP: ${obj[name][1]}`);
            }
            break;
        }
        let element = arr[j];
        if (element.includes('CastSpell')) {
            let [_, name, mpNeeded, spellName] = element.split(' - ');
            if (obj[name][1] >= mpNeeded) {
                obj[name][1] -= mpNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${obj[name][1]} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }

        } else if (element.includes('TakeDamage')) {
            let [_, name, damage, attacker] = element.split(' - ');
            obj[name][0] -= damage;
            if (obj[name][0] > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${obj[name][0]} HP left!`);
            } else {
                delete obj[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }
        } else if (element.includes('Recharge')) {
            let [_, name, amount] = element.split(' - ');
            amount = Number(amount);
            if (obj[name][1] + amount > 200) {
                let diff =  200 - obj[name][1];
                obj[name][1] = 200;
                console.log(`${name} recharged for ${diff} MP!`);
            } else {
                obj[name][1] += amount;
                console.log(`${name} recharged for ${amount} MP!`);
            }
        } else if (element.includes('Heal')) {
            let [_, name, amount] = element.split(' - ');
            amount = Number(amount);
            if (obj[name][0] + amount > 100) {
                let diff = 100 - obj[name][0];
                obj[name][0] = 100;
                console.log(`${name} healed for ${diff} HP!`);
            } else {
                obj[name][0] += amount;
                console.log(`${name} healed for ${amount} HP!`);
            }
        }
    }


}
heroes([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',
]);
console.log('------------');
heroes([4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End',
]);