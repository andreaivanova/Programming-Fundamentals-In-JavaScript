function match(str){
    let allMatches = str.matchAll(/\b([A-Z][a-z]+) ([A-Z][a-z]+)\b/g);
    //console.log(allMatches);
    let arr = [...allMatches];
    let outputArr = [];
    for (const element of arr) {
        outputArr.push(element[0]);
    }

console.log(outputArr.join(' '));

}
match("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");

