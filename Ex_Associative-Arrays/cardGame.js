function cardGame(input) {
    let symbolToPoints = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,

    }
    let players = {};
    let results = {};

    for (let command of input) {
        let tokens = command.split(': ');
        let playerName = tokens[0];
        let playerCards = tokens[1].split(', ');

        if (!Object.keys(players).includes(playerName)) {
            players[playerName] = [];
        }
        players[playerName] = players[playerName].concat(playerCards);
    }

    //calculate points:
    for(let [playerName, playerCards] of Object.entries(players)){
        results[playerName] = 0;
         for (let i = 0; i < playerCards.length; i++) {
            let card = playerCards[i];
            if (playerCards.indexOf(card) === i){
                let cardsAsArray = card.split('');
                let type = cardsAsArray.pop();
                let power = cardsAsArray.join('');
                let cardPoints = cardsAsArray.join('');

                if (Object.keys(symbolToPoints).includes(power)){
                    cardPoints = symbolToPoints[power] * symbolToPoints[type];
                } else {
                    cardPoints = Number(power) * symbolToPoints[type];
                }
                results[playerName]+=cardPoints;
            }
         }
    
        }
        for (const key in results) {
         console.log(`${key}: ${results[key]}`);
        }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
console.log('------------');
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);