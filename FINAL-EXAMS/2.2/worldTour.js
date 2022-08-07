function worldTour(arr) {
    let str = arr.shift();
    for (let element of arr) {
        if (element === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${str}`);
            break;
        }
        if (element.includes('Add')) {
            let [_, index, string] = element.split(':');
            index = Number(index);
            if (index >= 0 && index < str.length) {
                str = str.split('');
                str.splice(index, 0, string);
                str = str.join('');
            }

        } else if (element.includes('Remove Stop')) {
            let [_, startIndex, endIndex] = element.split(':');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if (startIndex >= 0 && endIndex >= 0 && startIndex < str.length && endIndex < str.length) {
                let part1 = str.slice(0, startIndex);
                let part2 = str.slice(endIndex + 1);
                str = part1 + part2;
            }


        } else if (element.includes('Switch')) {
            let [_, oldStr, newStr] = element.split(':');
            let regex = new RegExp(oldStr, 'g');
            str = str.replace(regex, newStr);
        }

        console.log(str);
    }


}
worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
);

