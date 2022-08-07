function returnTheSmallestNumber(a, b, c) {
    let smallestNumber = Math.min(a, b, c);
    return smallestNumber;
    // if (a >= b && a >= c) {
    //     if (b >= c) {
    //         return c;
    //     } else {
    //         return b;
    //     }
    // } else if (b >= a && b >= c) {
    //     if (a >= c) {
    //         return c;
    //     } else {
    //         return a;
    //     }
    // } else if (c >= a && c >= b) {
    //     if (a >= b) {
    //        return b;
    //     } else {
    //        return a;
    //     }
    // }

//funckiqta returnTheSmallestNumber vrushta rezultata na min chislo, ne go printira
//na konzolata ami go vrushta, toest to trqbva da byde prisvoeno v nqkakva promenliva
//naprimer let output = log(returnTheSmallestNumber(2,5,3)) 
// i veche tazi funckiq (returnTheSmallestNumber) tova koeto shte napravi
//e che shte izpylni vsichkite neshta vytre i shte vyrne tova koeto sme mu zadali 
//(v tozi sluchai - the smallest Number )
//i dolu pod koda, izvikvaiki tazi funckiq veche vrushta rezultata i toi shte vleze
//v promenlivata output i toi veche moje da se console.log-ne
// moje i bez promenliva a samo s console log
}
console.log(returnTheSmallestNumber(2, 5, 3))
console.log(returnTheSmallestNumber(600, 342, 123))
console.log(returnTheSmallestNumber(25, 21, 4))