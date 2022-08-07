function barcodes(arr) {
    let n = arr.shift();

    let regex = /\@\#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])\@\#+/;

    for (let element of arr) {
        let validMatch = regex.exec(element);
        if (validMatch) {
            let regexForNumbers = /[0-9]+/g;
            let allMatches = validMatch.groups.product.matchAll(regexForNumbers);
            let sum = '';
            for (const iterator of allMatches) {
                sum += iterator[0];

            }
            if (sum === '') {
                console.log('Product group: 00');
            } else {
                console.log(`Product group: ${sum}`);
            }

        } else {
            console.log('Invalid barcode');
        }
    }

}
barcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);
console.log('-------')
barcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
