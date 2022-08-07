function solve2(arr) {
    // let regex = /(@|\#)+[a-z]{3,}(@|\#)+[^A-Za-z0-9]*\/+\d+\/+/
    let regex = /(@|\#)+(?<name>[a-z]{3,})(@|\#)+[^A-Za-z0-9]*\/+(?<number>\d+)\/+/g;
    let allMatches = arr[0].matchAll(regex);
    for (const iterator of allMatches) {
        console.log(`You found ${iterator.groups.number} ${iterator.groups.name} eggs!`);
    }


}
solve2(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
console.log('-------------');
solve2(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);