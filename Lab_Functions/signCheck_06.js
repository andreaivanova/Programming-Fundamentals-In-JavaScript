function signCheck(a, b, c) {
    
        if ((a > 0 && b > 0 && c > 0) || (a < 0 && b < 0 && c > 0) || (a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c < 0)) {
            return 'Positive';
        } else  if ((a < 0 && b > 0 && c > 0) || (a > 0 && b < 0 && c > 0) || (a > 0 && b > 0 && c < 0) || (a < 0 && b < 0 && c < 0)){
            return 'Negative';
        }
    }
   





console.log(signCheck(5,
    12,
    -15
))
console.log(signCheck(-6,
    -12,
    14
))
console.log(signCheck(-1,
    -2,
    -3
))
console.log(signCheck(-5,
    1,
    1
))
