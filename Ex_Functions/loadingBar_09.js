function loadingBar(num){
    if (num === 100){
        console.log('100% Complete!\n[%%%%%%%%%%]');
    } else {
        let division = num / 10;
        let output = `${num}% [`;
         for (let i = 0; i < division; i++) {
            output += `%`;
         }
          for (let j = division; j < 10; j++) {
            output += `.`
          }
          output +=`]`
          console.log(`${output}\nStill loading...`);

    }
    
}
loadingBar(30)
loadingBar(50)    
loadingBar(100)