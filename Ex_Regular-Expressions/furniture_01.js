function furniture(arr) {
    let regex = />>(?<furniture>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/;
    let output = [];

    let sum = 0;

    for (let element of arr) {

        let match = regex.exec(element);
        if (match !== null) {
            sum += Number(match.groups['price']) * Number(match.groups['quantity']);
            output.push(match.groups['furniture']);
        }
    }

    console.log('Bought furniture:');
    if (output.length > 0) {

        console.log(output.join('\n'));
    }

    console.log('Total money spend:', `${sum.toFixed(2)}`);
}
furniture(['>>TV<<300!5',
    '>>Sofa<<312.23!3',
    '>Invalid<<!5',
    'Purchase']
);
console.log('-------');
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']
);
console.log('-------');
furniture(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
);