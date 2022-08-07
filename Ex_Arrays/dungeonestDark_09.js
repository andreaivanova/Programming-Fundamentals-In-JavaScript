function dungeonestDark(arr) {
    let splittedArr = arr[0].split("|");
    let health = 100;
    let totalCoins = 0;
    let isDead = false;
    //let currentHealth = 0;
    for (let i = 0; i < splittedArr.length; i++) {
        let currentRoom = splittedArr[i].split(' ');
        let itemOrMonster = currentRoom.shift();
        let number = currentRoom.shift();
        number = Number(number);
        if (itemOrMonster === 'potion') {
            health += number;
            let currentHp = 0;
            if (health > 100) {
                health -= number;
                currentHp = 100 - health;
                health += currentHp;
                console.log(`You healed for ${currentHp} hp.\nCurrent health: ${health} hp.`);
            } else {
                console.log(`You healed for ${number} hp.\nCurrent health: ${health} hp.`);
            }
        } else if (itemOrMonster === 'chest') {
            let coins = number;
            totalCoins += coins;
            console.log(`You found ${coins} coins.`);
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${i + 1}`);
                isDead = true;
                break;
            }
        }

    }
    if (!isDead) {
        console.log(`You've made it!\nCoins: ${totalCoins}\nHealth: ${health}`);
    }

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])