function distanceBetweenPoints(x1, y1, x2, y2) {
    //necessary formula for calculation:
    // √[(x₂ - x₁)² + (y₂ - y₁)²]

    let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
   
    console.log(result);
    




}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)