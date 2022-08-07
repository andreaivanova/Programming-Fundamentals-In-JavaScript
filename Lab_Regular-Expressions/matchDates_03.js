function matchDates(arr){
    let regex = /\b(?<day>\d{2})(\/|-|.)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let str = arr[0];
    let allMatches = str.matchAll(regex);
    for (const iterator of allMatches) {
        //console.log(iterator.groups['day']);
        console.log(`Day: ${iterator.groups['day']}, Month: ${iterator.groups['month']}, Year: ${iterator.groups['year']}`);
    }




}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
console.log('----')
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);