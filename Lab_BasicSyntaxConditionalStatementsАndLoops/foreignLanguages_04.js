function foreign(countryName){
    let language = '';
    if (countryName === 'England' || countryName === 'USA'){
        language = 'English';

    } else if (countryName === 'Spain' || countryName === 'Argentina' || countryName === 'Mexico'){
        language = 'Spanish';
    } else {
        language = 'unknown';
    }
    console.log(language);


}
foreign('USA');
foreign('Germany');
foreign('England');
foreign('Bulgaria');