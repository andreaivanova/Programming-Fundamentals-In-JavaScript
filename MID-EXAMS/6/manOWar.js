function manOWar(arr) {
    let pirateShipStatus = arr[0].split('>').map(Number);
    let warShipStatus = arr[1].split('>').map(Number);
    let maxHealth = Number(arr[2]);
    let isThereAStalemate = true;
    for (let i = 3; i < arr.length; i++) {
        if (arr[i] === 'Retire') {
            break;
        }

        if (arr[i].includes('Fire')) {
            let [command, index, damage] = arr[i].split(' ');
            index = Number(index);
            damage = Number(damage);
            if (index >= 0 && index < warShipStatus.length) {
                let element = warShipStatus[index];
                let givenDamage = element - damage;
                if (givenDamage <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    isThereAStalemate = false;
                    break;
                } else {
                   // warShipStatus.splice(index, 1, givenDamage);
                   warShipStatus[index] = givenDamage;
                }
            }

        } else if (arr[i].includes('Defend')) {
            let [command, startIndex, endIndex, damage] = arr[i].split(' ');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            damage = Number(damage);
            if (startIndex >= 0 && endIndex >= 0 && startIndex < pirateShipStatus.length
                && endIndex < pirateShipStatus.length) {
                for (let j = startIndex; j <= endIndex; j++) {
                    pirateShipStatus[j] -= damage;
                    if (pirateShipStatus[j] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        isThereAStalemate = false;
                        break;
                    }
                }
            }

        } else if (arr[i].includes('Repair')) {
            let [command, index, health] = arr[i].split(' ');
            index = Number(index);
            health = Number(health);
            if (index >= 0 && index < pirateShipStatus.length) {
                let element = pirateShipStatus[index];
                let givenHealth = element + health;
                if (givenHealth > maxHealth) {
                    givenHealth = maxHealth;
                    pirateShipStatus[index] = maxHealth;
                } else {
                    pirateShipStatus[index] += health;
                }
            }

        } else if (arr[i].includes('Status')) {
            // let sectionsNeedingRepair = pirateShipStatus.filter(x => x < maxHealth * 0.20);
            // console.log(`${sectionsNeedingRepair.length} sections need repair.`);
            let sectionsNeedingRepair = [];
            for (const section of pirateShipStatus) {
                if (section < maxHealth * 0.2){
                    sectionsNeedingRepair.push(section);
                }
            }
            console.log(`${sectionsNeedingRepair.length} sections need repair.`);
        }

    }
    let sumPirateShip = 0;
    let sumWarShip = 0;
    for (const iterator of pirateShipStatus) {
        sumPirateShip += iterator;
    }
    for (const element of warShipStatus) {
        sumWarShip += element;
    }
    if (isThereAStalemate) {
        console.log(`Pirate ship status: ${sumPirateShip}\nWarship status: ${sumWarShip}`);
    }




}
manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
);
console.log('.......');
manOWar((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
);