function pascalCaseSplitter(str) {
    let strAsArr = str.split('');
    let outputArr = [];

    for (let i=0; i< strAsArr.length; i++) {
        let element = strAsArr[i];
        if (element === element.toUpperCase()) {
            let tempString = ``;
            tempString += element;
            for (let j = i + 1; j < strAsArr.length; j++) {
                if (strAsArr[j] === strAsArr[j].toUpperCase()) {
                    break;
                }
                tempString += `${strAsArr[j]}`;
            }
            outputArr.push(tempString);
        }
    }
    console.log(outputArr.join(', '));

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');