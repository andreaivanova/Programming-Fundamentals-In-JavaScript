function movies(arr) {
    let moviesArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i]
        if (currentCommand.includes('addMovie')) {
            let [command, ...movieName] = currentCommand.split(' ');
            let obj = {};
            movieName = movieName.join(' ');
            obj.name = movieName;
            moviesArr.push(obj);
            
 
        } else if (currentCommand.includes('directedBy')) {
            currentCommand = currentCommand.split(' ');
            let indexOfDirectedBy = currentCommand.indexOf('directedBy');
            let movie = [];
            let director = [];
            for (let j = 0; j < indexOfDirectedBy; j++) {
                movie.push(currentCommand[j]);
            }
            for (let k = indexOfDirectedBy + 1; k < currentCommand.length; k++) {
                director.push(currentCommand[k]);
 
            }
            movie = movie.join(' ');
            director = director.join(' ');
            let moviesObj = moviesArr.find(x => x.name === movie); // this method returns the whole object
            if(moviesObj){
                moviesObj.director = director;
            }
 
        } else if(currentCommand.includes('onDate')){
            currentCommand = currentCommand.split(' ');
            let date = currentCommand.pop();
            currentCommand.pop();
            let movie = currentCommand.join(' ');
            let moviesObject = moviesArr.find(x => x.name === movie);
            if(moviesObject){
                moviesObject.date = date;
            }
 
        }
        
    }
    let objProperty = 'director';
    let objProperty2 = 'data';
     for (const movie of moviesArr) {
        if(movie.director && movie.date && movie.name){
           console.log(JSON.stringify(movie));
      }
    }
}
// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);
// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
// ]);