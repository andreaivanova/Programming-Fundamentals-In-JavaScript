function gramophone (bandName, albumName, songName){
    let songDurationInSec = (albumName.length * bandName.length) * songName.length / 2;
    let plateFullRotation = 2.5;
    let timesOfRotation = songDurationInSec / plateFullRotation;
    console.log(`The plate was rotated ${Math.ceil(timesOfRotation)} times.`);
//alternative solution
    // //while (duration >0){
    //     rotations++;
    //     duration -= 2.5
    // }
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')