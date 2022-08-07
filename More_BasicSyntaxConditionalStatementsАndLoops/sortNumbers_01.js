function sortNumbers(a, b, c) {
    //if a is the greatest
    if (a >= b && a >= c) {
        if (b >= c) {
            console.log(a);
            console.log(b);
            console.log(c);
        } else  {
            console.log(a);
            console.log(c);
            console.log(b);
        }
        //if b is the greatest
    } else if (b >= a && b >= c) {
        if (a >= c) {
            console.log(b);
            console.log(a);
            console.log(c);
        } else  {
            console.log(b);
            console.log(c);
            console.log(a);
        }
        //if c is the greatest
    } else if (c >= a && c >= b) {
        if (a >= b) {
            console.log(c);
            console.log(a);
            console.log(b);
        } else {
            console.log(c);
            console.log(b);
            console.log(a);
        }

    }



}
sortNumbers(2,
    1,
    3
)
sortNumbers(-2,
    1,
    3
)
sortNumbers(0,
    0,
    2
)