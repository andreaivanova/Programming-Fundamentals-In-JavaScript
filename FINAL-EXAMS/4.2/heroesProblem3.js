function heroes(arr) {
    let n = Number(arr.shift());
    let obj = {};
    for (let i = 0; i < n; i++) {
        let [name, HP, MP] = arr[i].split(' ');
        HP = Number(HP);
        MP = Number(MP);
        obj[name] = [HP, MP];

    }

    for (let j = n; j < arr.length; j++) {
        if (arr[j] === 'End') {
            for (const key in obj) {
                console.log(`${key}\n  HP: ${obj[key][0]}\n  MP: ${obj[key][1]}`);
            }
            break;
        }
        if (arr[j].includes('CastSpell')) {
            let [_, name, MP, spellName] = arr[j].split(' - ');
            MP = Number(MP);
            if (obj[name][1] >= MP) {
                obj[name][1] -= MP;
                console.log(`${name} has successfully cast ${spellName} and now has ${obj[name][1]} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }

        } else if (arr[j].includes('TakeDamage')) {
            let [_, name, damage, attacker] = arr[j].split(' - ');
            damage = Number(damage);
            obj[name][0] -= damage;
            if (obj[name][0] > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${obj[name][0]} HP left!`);
            } else {
                delete obj[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }

        } else if (arr[j].includes('Recharge')) {
            let [_, name, amount] = arr[j].split(' - ');
            amount = Number(amount);
            if (obj[name][1] + amount > 200) {
                let diff = 200 - obj[name][1];
                obj[name][1] = 200;
                console.log(`${name} recharged for ${diff} MP!`);
            } else {
                obj[name][1] += amount;
                console.log(`${name} recharged for ${amount} MP!`);
            }

        } else if (arr[j].includes('Heal')) {

            let [_, name, amount] = arr[j].split(' - ');
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