function cone(radius, height) {
    let volume = (height * Math.PI * Math.pow(radius,2)) / 3;
 // V=1/3hπr²

        let slantHeight = Math.sqrt(Math.pow(radius,2) + Math.pow(height,2))
        let lateralArea = Math.PI * radius * slantHeight;
        let baseArea = Math.PI * Math.pow(radius,2);
        let totalSurfaceArea = (lateralArea + baseArea);
        console.log(`volume = ${volume.toFixed(4)}`);
        console.log(`area = ${totalSurfaceArea.toFixed(4)}`);

}
cone(3, 5)
cone(3.3, 7.8)