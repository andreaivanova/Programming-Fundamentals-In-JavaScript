
function tseamAccount(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace('-', ':')
    }
    let account = arr.shift().split(' ');

    // let splittedArr = arr[0].split(' ');

    for (let i = 0; i < arr.length; i++) {
        let currentArr = arr[i].split(' ');
        let command = currentArr.shift();
        let game = currentArr.shift();
        if (command === 'Play!') {
            break;
        }
        if (command === 'Install') {
            if (!account.includes(game)) {
                account.push(game);
            }
        } else if (command === 'Uninstall') {
            if (account.includes(game)) {
                let index = account.indexOf(game);
                account.splice(index, 1);
            }
        } else if (command === 'Update') {
            if (account.includes(game)) {
                let index = account.indexOf(game);
                account.splice(index, 1);
                account.push(game);
            }
        } else if (command = 'Expansion') {

            let [originalGame, expansion] = game.split(':');
            //console.log(originalGame, expansion);
            if (account.includes(originalGame)) {
                let gameIndex = account.indexOf(originalGame);
                let expansionedGame = `${originalGame}:${expansion}`
                account.splice(gameIndex + 1, 0, expansionedGame);
            }

        }

    }
    console.log(account.join(' '));


}
// tseamAccount(['CS WoW Diablo',
//     'Install LoL',
//     'Uninstall WoW',
//     'Update Diablo',
//     'Expansion CS-Go',
// //     'Play!']
// )
tseamAccount(['A B C',
    'Expansion B-D',
    'Expansion B:D-Second',
    'Play!',
 ]
)