function carWash(arr){
    let percentage = 0;
     for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i];
        if (currentCommand === 'soap'){
            percentage += 10;
        } else if (currentCommand === 'water'){
            percentage += percentage * 0.20;
        } else if (currentCommand === 'vacuum cleaner'){
            percentage += percentage * 0.25;
        } else if (currentCommand === 'mud'){
            percentage -= percentage * 0.10;
        }
     }
     //console.log(`The car is ${percentage.toFixed(2)}% clean.`);
     percentage = percentage.toFixed(2);
     return percentage;

}
let output = carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
console.log(`The car is ${output}% clean.`);
//carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])