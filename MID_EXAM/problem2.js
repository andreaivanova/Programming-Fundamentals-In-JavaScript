function solve2(arr) {
    let friends = arr.shift().split(', ');
    let lostUsernames = [];
    let amountOfBlackListed = 0;
    let amountOfLost = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Report') {
//             o	Blacklisted names: {number of blacklisted names}
// o	Lost names: {number of lost names}
            console.log(`Blacklisted names: ${amountOfBlackListed}`);
            console.log(`Lost names: ${amountOfLost}`);
            console.log(friends.join(' '));
            break;
        }
        let currentCommand = arr[i].split(' ');
        if (currentCommand.includes('Blacklist')) {
            let [command, name] = currentCommand;
            let isItFound = false;
            for (let j = 0; j < friends.length; j++) {
                if (friends[j] === name) {
                    console.log(`${name} was blacklisted.`);
                    friends[j] = 'Blacklisted'; 
                    isItFound = true;
                    amountOfBlackListed++;
                    break;
                }
            }

            if (!isItFound) {
                console.log(`${name} was not found.`);
            }
        } else if (currentCommand.includes('Error')) {
            let [command, index] = currentCommand;
            index = Number(index);
            let currentName = friends[index];
            if ((index >= 0 && index < friends.length) && friends[index] !== 'Blacklisted' && !lostUsernames.includes(currentName) && friends[index] !== 'Lost') {
                lostUsernames.push(currentName);
                console.log(`${currentName} was lost due to an error.`);
                friends[index] = 'Lost';
                amountOfLost++;
            }

        } else if (currentCommand.includes('Change')) {
            let [command, index, newName] = currentCommand;
            if (index >= 0 && index < friends.length && friends[index] !== 'Blacklisted' && !lostUsernames.includes(friends[index]) && friends[index] !== 'Lost') {
                let oldUsername = friends[index];
                friends[index] = newName;
                console.log(`${oldUsername} changed his username to ${newName}.`);
            }
        }
    }



}
solve2(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"])
console.log(`''''''''''''`);
solve2(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"])
console.log(`''''''''''''`);
solve2(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"])
