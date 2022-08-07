
/*
[(#\|)]
(?<name>[A-Z][a-z]+(?: [A-Z]?[a-z]+)*)
    (?<date>\d\d\/\d\d\/\d\d)
    (?<calories>\d+)

    (#|\|)(?<name>[A-Z][a-z]+(?: [A-Z]?[a-z]+)*)\1(?<date>\d\d\/\d\d\/\d\d)\1(?<calories>\d+)\1

        final regex: 
        (?:#|\|)(?<name>[A-Z][a-z]+(?: [A-Z]?[a-z]+)*)(?:#|\|)(?<date>\d\d\/\d\d\/\d\d)(?:#|\|)(?<calories>\d+)(?:#|\|)

        (#|\|)(?<name>[A-Z][a-z]+(?: [A-Z]?[a-z]+)*)\1(?<date>\d\d\/\d\d\/\d\d)\1(?<calories>\d+)\1
            */
function solve(arr) {
    let regex = /(#|\|)(?<name>[A-Z][a-z]+(?: [A-Z]?[a-z]+)*)\1(?<date>\d\d\/\d\d\/\d\d)\1(?<calories>\d+)\1/g;
    let allMatches = arr[0].matchAll(regex);
 
    let totalCalories = 0;
    for (const iterator of allMatches) {
        totalCalories += Number(iterator.groups.calories);
  
    }
   
    let days = Math.floor(totalCalories / 2000);
    console.log('You have food to last you for:', days, 'days!');
    allMatches = arr[0].matchAll(regex);
    for (const iterator of allMatches) {
         console.log(`Item: ${iterator.groups.name}, Best before: ${iterator.groups.date}, Nutrition: ${iterator.groups.calories}`);
      
    }
}


solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])
console.log('-------');
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
console.log('-------');
solve(['Hello|#Invalid food#19/03/20#450|$5*(@'])