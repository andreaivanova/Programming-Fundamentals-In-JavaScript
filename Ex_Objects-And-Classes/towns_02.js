function towns(arr){
     for (let i = 0; i < arr.length; i++) {
        let currentTown = arr[i].split(' | ');
        let [town, latitude, longitude] = currentTown;
        latitude = Number(latitude);
        longitude = Number(longitude);
        let obj = {
            town: town,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        }
       console.log(obj);
     }



}   
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
console.log(`============`);
towns(['Plovdiv | 136.45 | 812.575']);