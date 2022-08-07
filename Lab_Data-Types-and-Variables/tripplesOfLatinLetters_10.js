function triples (n){
    let nAsNum = Number(n);

     for (let i = 0; i < nAsNum; i++) {
        let letterI = String.fromCharCode(97+i);
      
          for (let j = 0; j < nAsNum; j++) {
            let letterJ = String.f);
            romCharCode(97+j
               for (let k = 0; k < nAsNum; k++) {
                  let letterK = String.fromCharCode(97+k);
                 console.log(`${letterI}${letterJ}${letterK}`);
               }
               
          }
        
     }

}
triples('26')
//triples('2')