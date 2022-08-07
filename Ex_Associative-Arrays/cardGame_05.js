function cardGame(arr) {
    let obj = {};

    for (let element of arr) {

        let [name, ...cards] = element.split(': ');
        cards = cards[0].split(', ');
        let deckOfCards = [];
        for (const card of cards) {
            if (!deckOfCards.includes(card)) {
                deckOfCards.push(card);
            }
        }
        if (!obj.hasOwnProperty(name)) {
            obj[name] = deckOfCards;
            continue;
        }
        for (const card of deckOfCards) {
            if (!obj[name].includes(card)) {
                obj[name].push(card);
            }
        }
    }
    //console.table(obj);
    let entries = Object.entries(obj);

    for (let [name, cards] of entries) {
        let sum = 0;
        for (let card of cards) {
            let result = 0;
            let valueOfPower = 0;
            let power = 0;
            let type = '';
            if (card.length === 3){
                let [power1, power2, typeOfCard] = card.split('');
                power = power1+power2;
                type = typeOfCard;
            } else{

                [power, type] = card.split('');
            }

            
            if (power.charCodeAt(0) > 48 && power.charCodeAt(0) <= 57) {
                power = Number(power);
            } else {
                switch (power) {
                    case 'J':
                        valueOfPower = 11;
                        break;
                    case 'Q':
                        valueOfPower = 12;
                        break;
                    case 'K':
                        valueOfPower = 13;
                        break;
                    case 'A':
                        valueOfPower = 14;
                        break;

                }
            }
            let valueOfType = 0;
            switch (type) {
                case 'S':
            valueOfType = 4;
                    break;
                case 'H':
                    valueOfType = 3;
                    break;
                case 'D':
                    valueOfType = 2;
                    break;
                case 'C':
                    valueOfType = 1;
                    break;

            }
            if (isNaN(power)){

                result = valueOfPower * valueOfType;
            } else {
                result = power * valueOfType;
            }
            sum+=result;
        }
        console.log(name + ': ' + sum);
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