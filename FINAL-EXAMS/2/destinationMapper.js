function destinationMapper(str) {
    // const pattern = /([=/])(?<name>[A-Z][A-Za-z]{2,})\1/g; - rado
    let regex = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g;
    let allMatches = str.matchAll(regex);
    let sum = 0;
    let destinations = [];
    for (const element of allMatches) {
      destinations.push(element.groups.name);
      sum += element.groups.name.length;
    }
    console.log('Destinations:', destinations.join(', '));
    console.log('Travel Points:', sum);
  
  }
  
  console.log('----------Test 1----------');
  destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
  
  console.log('----------Test 2----------');
  destinationMapper('ThisIs some InvalidInput')