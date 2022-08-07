function serializeString(arr){
    let str = arr[0].split('');
    let obj = {};

     for (let i = 0; i < str.length; i++) {
        if(!obj.hasOwnProperty(str[i])){
            obj[str[i]] = [];
        } 
            obj[str[i]].push(str.indexOf(str[i]));
            str[i] = 0;
     }
     for (const key in obj) {
       console.log(`${key}:${obj[key].join('/')}`);
     }


}
serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);