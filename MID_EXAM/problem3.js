function solve3(arr) {
    let cards = arr.shift().split(', ');
    let n = arr.shift();
    n = Number(n);

    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i].split(', ');
        if (arr[i].includes('Add')) {
            let [command, cardName] = currentCommand;
            if (cards.includes(cardName)) {
                console.log('Card is already in the deck');
            } else {
                cards.push(cardName);
                console.log('Card successfully added');

            }
        } else if (arr[i].includes('Remove') && !arr[i].includes('Remove At')) {
            let [command, cardName] = currentCommand;
            if (cards.includes(cardName)) {
                let index = cards.indexOf(cardName);
                cards.splice(index, 1);
                console.log('Card successfully removed');
            } else {
                console.log('Card not found');
            }
        } else if (arr[i].includes('Remove At')) {
            let [command, index] = currentCommand;
            if (index >= 0 && index < cards.length){
                cards.splice(index, 1);
                console.log('Card successfully removed');
            } else {
                console.log('Index out of range');
            }
        } else if (arr[i].includes('Insert')) {
            let [command, index, cardName] = currentCommand;
            let isTheIndexValid = index >= 0 && index < cards.length;
            let isItAlreadyInTheDeck = cards.includes(cardName);
            if(isTheIndexValid && isItAlreadyInTheDeck){
                console.log('Card is already added');
            } else if (isTheIndexValid && !isItAlreadyInTheDeck){
                cards.splice(index, 0, cardName);
                console.log('Card successfully added');
            } else if (!isTheIndexValid){
                console.log('Index out of range');
            }
        }
    }
    console.log(cards.join(', '));

}
solve3(["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"])
console.log(`~~~~~~~~~~~~~~~~~`);
solve3(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
    "2",
    "Add, Two of Clubs",
    "Remove, Five of Hearts"])
console.log(`~~~~~~~~~~~~~~~~~`);
solve3(["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"])
