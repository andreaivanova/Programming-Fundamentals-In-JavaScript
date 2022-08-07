function barcode(arr) {
    let n = Number(arr.shift());
    let regex = /@\#+(?<name>[A-Z][A-Za-z0-9]{4,}[A-Z])@\#+/;
    for (let element of arr) {
        let match = regex.exec(element);
        if (match !== null) {
            let product = match.groups.name;    
            let regexNum = /(?<number>[0-9])/g;
            let allMatches = product.matchAll(regexNum);
            let result = [];
            for (let res of allMatches) {
                result.push(res.groups.number);
            }
            if (result.length === 0){
                console.log('Product group: 00');
                continue;
            }
            console.log(`Product group: ${result.join('')}`);

        } else {
            console.log('Invalid barcode');
        }
    }




}
barcode((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
);
console.log('------');
barcode((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
);