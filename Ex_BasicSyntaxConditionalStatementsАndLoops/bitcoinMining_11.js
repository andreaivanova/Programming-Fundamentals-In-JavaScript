function bitcoinMining(array) {
    let diggedUpGoldPerDay = 0;
    let goldInBGN = 0;
    let sum = 0;
    let bitcoinPrice = 11949.16;
    let countBoughtBitcoins = 0;

    let firstDay = 0;

    for (let i = 1; i <= array.length; i++) {
        diggedUpGoldPerDay = array[i - 1];
        if (i % 3 === 0) {
            diggedUpGoldPerDay -= diggedUpGoldPerDay * 0.30;
        }
        goldInBGN = diggedUpGoldPerDay * 67.51;
        sum += goldInBGN;
        while (sum >= bitcoinPrice) {

            sum -= bitcoinPrice;
            countBoughtBitcoins++;
            if (countBoughtBitcoins === 1) {
                firstDay = i;
            }
        }




    }
    console.log(`Bought bitcoins: ${countBoughtBitcoins}`);
    if (countBoughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);






}
//bitcoinMining([100, 200, 300]) // amount of gold mined each day
//bitcoinMining([3124.15, 504.212, 2511.124])
bitcoinMining([50, 100])