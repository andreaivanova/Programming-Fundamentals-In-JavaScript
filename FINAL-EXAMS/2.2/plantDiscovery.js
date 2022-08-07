function plantDiscovery(arr) {
    let n = Number(arr.shift());
    let obj = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = arr[i].split('<->');
        rarity = Number(rarity);
        obj[plant] = [rarity, []];
    }

    for (let j = n; j < arr.length; j++) {
        if (arr[j] === 'Exhibition') {
            console.log('Plants for the exhibition:');
            for (const key in obj) {

                if (obj[key][1].length === 0) {
                    console.log(`- ${key}; Rarity: ${obj[key][0]}; Rating: 0.00`);
                } else {
                    console.log(`- ${key}; Rarity: ${obj[key][0]}; Rating: ${(obj[key][1].reduce((x, y) => x + y) / obj[key][1].length).toFixed(2)}`);
                }
            }
            break;
        }
        if (arr[j].includes('Rate')) {
            let currentElement = arr[j].split('Rate: ');
            let [plant, rating] = currentElement[1].split(' - ');
            if (obj.hasOwnProperty(plant)) {
                rating = Number(rating);
                obj[plant][1].push(rating);
            } else {
                console.log('error');
            }

        } else if (arr[j].includes('Update')) {
            let currentElement = arr[j].split('Update: ');
            let [plant, newRarity] = currentElement[1].split(' - ');
            newRarity = Number(newRarity);
            if (obj.hasOwnProperty(plant)) {
                obj[plant][0] = newRarity;
            } else {
                console.log('error');
            }


        } else if (arr[j].includes('Reset')) {
            let [_, plant] = arr[j].split('Reset: ');
            if (obj.hasOwnProperty(plant)) {
                obj[plant][1] = [];
            } else {
                console.log('error');
            }

        }

    }

}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
console.log('-------');
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"]);