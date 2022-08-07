function computer(arr) {
    let netSum = 0;
    let ticketType = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'special' || arr[i] === 'regular') {
            ticketType = arr[i];
            break;
        }
        let currentElement = Number(arr[i]);
        if (currentElement < 0) {
            console.log('Invalid price!');
            continue;
        }
        netSum += currentElement;
    }
    if (netSum === 0) {
        console.log('Invalid order!');
    } else {
        sum = netSum + netSum * 0.20;
        if (ticketType === 'special') {
            sum -= sum * 0.10;
        }
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${netSum.toFixed(2)}$\nTaxes: ${(netSum * 0.20).toFixed(2)}$\n-----------\nTotal price: ${sum.toFixed(2)}$`);
    }

}
computer([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
