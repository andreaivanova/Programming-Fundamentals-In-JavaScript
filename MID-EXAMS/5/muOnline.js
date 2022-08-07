function muOnline(str) {
    let arr = str.split('|');
    let initialHealth = 100;
    let initialBitcoins = 0;
    let currentHealth = 100;
    let isKilled = false;
    for (let i = 0; i < arr.length; i++) {
        let [command, number] = arr[i].split(' ');
        number = Number(number);
        if (command === 'potion') {
            let diff = 100 - currentHealth;
            currentHealth += number;
            if (currentHealth > initialHealth) {
                currentHealth = 100;
                console.log(`You healed for ${diff} hp.`);
            } else {
                console.log(`You healed for ${number} hp.`);
            }
            console.log(`Current health: ${currentHealth} hp.`);
        } else if (command === 'chest') {
            initialBitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            currentHealth -= number;
            if (currentHealth > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                isKilled = true;
                break;
            }
        }
    }
    if (!isKilled) {
        console.log(`You've made it!\nBitcoins: ${initialBitcoins}\nHealth: ${currentHealth}`);
    }


}
// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
console.log(`.........`);
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")