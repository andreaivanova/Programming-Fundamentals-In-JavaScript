function armies(arr) {
    let obj = {};
    // let armyInfo = [];
    for (let element of arr) {
        if (element.includes('arrives')) {
            element = element.split(' ');
            element.pop();
            element = element.join(' ');

            if (!obj.hasOwnProperty(element)) {
                obj[element] = {};
            }

        } else if (element.includes(':')) {
            let [leader, info] = element.split(': ');

            let [armyName, armyCount] = info.split(', ');
            armyCount = Number(armyCount);

            if (obj.hasOwnProperty(leader)) {
                obj[leader][armyName] = armyCount;
            }

        } else if (element.includes('+')) {
            let [armyName, armyCount] = element.split(' + ');
            armyCount = Number(armyCount);
            for (let leader in obj) {
                if (obj[leader].hasOwnProperty(armyName)) {
                    obj[leader][armyName] += armyCount;
                    break;
                }
            }

        } else if (element.includes('defeated')) {
            element = element.split(' ');
            element.pop();
            element = element.join(' ');
            delete obj[element];
        }
    }
   // console.table(obj);
   // let entries = Object.entries(obj)
    for (let key in obj) {
        let sum = 0;
        for (let nestedKey in obj[key]) {
            sum += obj[key][nestedKey];
        }
        obj[key]['sum'] = sum;
    }
    Object.entries(obj)
        .sort((a, b) => b[1].sum - a[1].sum)
        .forEach(element => {
        console.log(`${element[0]}: ${element[1].sum}`);
        delete element[1].sum;
        Object.entries(element[1]).sort((a, b) => b[1] - a[1])
            .forEach(key => console.log(`>>> ${key[0]} - ${key[1]}`));
})






}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);