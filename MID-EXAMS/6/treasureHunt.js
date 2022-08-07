function treasureHunt(input) {
    let treasureChest = input.shift().split('|');
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Yohoho!') {
            break;
        }
        let [command, ...items] = input[i].split(' ');
        if (command === 'Loot') {
            for (let j = 0; j < items.length; j++) {
                if (!treasureChest.includes(items[j])) {
                    treasureChest.unshift(items[j]);
                }
            }
        } else if (command === 'Drop') {
            items = Number(items);
            let isTheFirstIndexValid = isItInBounds(items);
            //items = index
            if (isTheFirstIndexValid) {
                let temp = treasureChest[items];
                treasureChest.splice(items, 1)
                treasureChest.push(temp);

            }
        } else if (command === 'Steal') {
            items = Number(items);
            let stolenTreasureChest = [];
            if (items > treasureChest.length) {
                stolenTreasureChest = treasureChest.slice();
                console.log(stolenTreasureChest.join(', '));
                treasureChest = []
            } else {
                stolenTreasureChest = treasureChest.slice(-items);
                treasureChest.splice(treasureChest.length - items, items)
                console.log(stolenTreasureChest.join(', '));
            }
        }
    }

    if (treasureChest.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        let sumAllItemsLength = 0;
        for (let k = 0; k < treasureChest.length; k++) {
            let currentWordLength = treasureChest[k].length;
            sumAllItemsLength += currentWordLength;

        }
        let averageTreasureGain = sumAllItemsLength / treasureChest.length;
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    }
    function isItInBounds(index) {
        if (index >= 0 && index < treasureChest.length) {
            return true;
        } else {
            return false;
        }
    }

}

treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
)
console.log(`..........`);
treasureHunt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 12",
    "Yohoho!"])
)
