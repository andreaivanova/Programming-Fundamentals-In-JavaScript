function oddOccurrences(string) {
    let stringAsArr = string.split(' ').
    map(element => element.toLowerCase());
    let map = new Map();
  

    for (const element of stringAsArr) {
        if (map.has(element)) {
            let tempEl = map.get(element);
            tempEl++;
            map.set(element, tempEl)
        } else {
            map.set(element, 1);
        }
    }
   
    let entries = Array.from(map.entries());
    
    let output = [];
    for (const [word, occurrences] of entries) {
        if (occurrences % 2 !== 0){
            output.push(word);
        }
    }
   console.log(output.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');