function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let trashedHelmet = 0;
    let trashedSword = 0;
    let trashedShield = 0;
    let trashedArmor = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            trashedHelmet++;
        }
        if (i % 3 === 0) {
            trashedSword++;
        }
        if (i % 6 === 0) {
            trashedShield++;
        }
        if (i % 12 === 0) {
            trashedArmor++;
        }


    }
    let totalExpenses = trashedHelmet * helmetPrice + swordPrice * trashedSword + trashedShield * shieldPrice + armorPrice * trashedArmor;
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);




}
gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)