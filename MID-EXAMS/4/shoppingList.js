function shoppingList(arr) {
    let groceriesList = arr.shift().split('!');
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'Go Shopping!') {
            console.log(groceriesList.join(', '));
            break;
        }
        let [command, item, newItem] = arr[i].split(' ');
        if (command === 'Urgent') {
            if (!groceriesList.includes(item)) {
                groceriesList.unshift(item);
            }

        } else if (command === 'Unnecessary') {
            if (groceriesList.includes(item)) {
                let indexOfItem = groceriesList.indexOf(item);
                groceriesList.splice(indexOfItem, 1);
            }
        } else if (command === 'Correct') {
            if (groceriesList.includes(item)) {
                let indexOfItem = groceriesList.indexOf(item);
                groceriesList.splice(indexOfItem, 1, newItem);
            }
        } else if (command === 'Rearrange') {
            if (groceriesList.includes(item)) {
                let indexOfItem = groceriesList.indexOf(item);
                let itemToAdd = groceriesList.slice(indexOfItem, indexOfItem + 1);
                groceriesList.splice(indexOfItem, 1);
                groceriesList.push(itemToAdd);
            }
        }
        // else {
        //     break;
        // }
    }



}
shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);
console.log('~~~~~~~~~~~~~~~');
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

