function prime(n){
    // if (number % number === 0 && number % 1 === 0){

    //     console.log('true');
    // } else {
    //     console.log('false');
    // }
    //  for (let i = 2; i <= n; i++) {
    //     if (n % i === 0){
    //         console.log('false');
    //         break;
    //     } else {
    //         'true';
    //         break;
    //     }
    //  }
    function isPrime(num) {

        if (num === 2) {
            console.log('true');
            
        } else if (num > 1) {
          for (let i = 2; i < num; i++) {
      
            if (num % i !== 0) {
              console.log('true');
              break;
            } else if (num === i * i) {
                console.log('false');
                break;
            } else {
                console.log('false');
                break;
            }
          }
        } else {
            console.log('false');
            
        }
      
      }
      

}
prime(7)
prime(8)
prime(81)