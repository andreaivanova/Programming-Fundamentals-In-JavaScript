function passwordValidator(password) {
    function isLengthBetweenSixAndTen(string) {
        if ((string.length >= 6 && string.length <= 10)) {
            return true;
        } else {
            return false;
        }
    }
    //razlikata v imenata na promenlivite s  koito krushtavame funkciite,
    // v tozi sluchai password i string ne prechi. Tova che krushtavame na nestnata
    // funkciq var. da e string e prosto kak da se obrushtame v nashata funkciq kum 
    // tazi stoinost, v smsl kakvo ime na promenliva i suzdavame na nestnata funckiq,
    // lokalno vutre v neq
    function doesItHaveOnlyLettersAndNums(string) {
        for (let iterator of string) {
            let charCode = iterator.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57) && 
            !(charCode >= 65 && charCode <= 90) && 
            !(charCode >= 97 && charCode <= 122)){
                return false;
            } 
       } return true;
    }
    function hasAtLeastTwoDigits(string) {
        let counter = 0;
        for (let iterator of string) {
            let charCode = iterator.charCodeAt(0);
            if(charCode >= 48 && charCode <= 57){
                counter++;
            } 
        }
        return counter >= 2; // alternative expression
        // if (counter >= 2){
        //     return true;
        // } else{
        //     return false;
        // }
    }
    let isLengthValid = isLengthBetweenSixAndTen(password);
    let doesItContainLettersAndNums = doesItHaveOnlyLettersAndNums(password);
    let hasAtLeastTwoNums = hasAtLeastTwoDigits(password);
    if (isLengthValid && doesItContainLettersAndNums && hasAtLeastTwoNums){
        console.log('Password is valid');
    } else {
        if (!isLengthValid){
            console.log('Password must be between 6 and 10 characters');
        } 
        if(!doesItContainLettersAndNums) {
            console.log('Password must consist only of letters and digits');
        }
        if (!hasAtLeastTwoNums){
            console.log('Password must have at least 2 digits');
        }
    }

}
passwordValidator('Pa$s$s')