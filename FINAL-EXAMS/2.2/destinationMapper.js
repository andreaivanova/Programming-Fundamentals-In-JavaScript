function destination(str) {
    let regex =/(=|\/)(?<name>[A-Z]([A-Z]|[a-z]){2,})\1/g;
    let allMatches = str.matchAll(regex);
    let destinations = [];
    let sum = 0;
    for (let iterator of allMatches) {
        destinations.push(iterator.groups.name);
        sum += iterator.groups.name.length;
    }
    console.log(`Destinations: ${destinations.join(', ')}\nTravel Points: ${sum}`);
}
destination("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('-------');
destination("ThisIs some InvalidInput");