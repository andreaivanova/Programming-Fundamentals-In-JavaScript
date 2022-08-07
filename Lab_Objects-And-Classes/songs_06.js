function songs(arr) {
    class Song { 
        constructor (typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    //let isTheLastCommandAll = false;
    let songsToPrint = [];
    let printAll = [];
    let n = arr.shift();
    let lastCommand = arr.pop();
     for (let i = 0; i < arr.length; i++) {
        let [typeList, name, time] = arr[i].split('_');
        let obj = new Song(typeList, name, time);
        let values = Object.values(obj);
        if (values[0]=== lastCommand && lastCommand !== 'all'){
            songsToPrint.push(values[1]);
        }
       if (lastCommand === 'all'){
        printAll.push(obj.name);
       }
     }

     if (lastCommand === 'all'){
         console.log(printAll.join('\n'));
     } else {
         console.log(songsToPrint.join('\n'));
     }
}
// songs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
// )
// console.log(`.............`);
// songs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']
// )
console.log(`.............`);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)