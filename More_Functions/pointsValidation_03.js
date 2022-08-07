function pointsValidation(arr){
    //x1, y1 point
    let x1 = arr.shift();
    let y1 = arr.shift();
   
    //x2, y2 point
    let x2 = arr.shift();
    let y2 = arr.shift();
  
    //distance calculation between each point
    let distanceBetweenX1y1And00 = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
    let distanceBetweenX2y2And00 = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2));
    let distanceBetweenX1y1AndX2y2 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    //checking validity
    if (Number.isInteger(distanceBetweenX1y1And00)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(distanceBetweenX2y2And00)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(distanceBetweenX1y1AndX2y2)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }


    
  
}
pointsValidation([3, 0, 0, 4]);
console.log(`------------`);
pointsValidation([2, 1, 1, 1]);