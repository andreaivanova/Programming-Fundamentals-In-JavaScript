function inventory(arr) {
    let obj = {};
    let arrOfObjs = [];
     for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i].split(' / ');
        //let heroName = currentCommand[0];
        let [heroName, heroLevel, items] = currentCommand;
        heroLevel = Number(heroLevel);
        obj =  {
            heroName,
            heroLevel, 
            items
        }
        // obj.hero = heroName;
        // obj.level = heroLevel;
        // obj.items = items;
        arrOfObjs.push(obj);

     }
    arrOfObjs =  arrOfObjs.sort((a,b) => {
         return a.heroLevel - b.heroLevel;
     })
     for (const iterator of arrOfObjs) {
        console.log(`Hero: ${iterator.heroName}\nlevel => ${iterator.heroLevel}\nitems => ${iterator.items}`);
     }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);
console.log(`------------`);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
);