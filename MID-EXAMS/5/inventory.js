function inventory(arr) {
    let journal =   arr.shift().split(', ');
     for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Craft!'){
            break;
        }
        let [command, item] = arr[i].split(' - ');
        if (command === 'Collect'){
            if (!journal.includes(item)){
                journal.push(item);
            }
        } else if (command === 'Drop'){
            if (journal.includes(item)){
               let index = journal.indexOf(item);
               journal.splice(index, 1);
            }
        } else if (command === 'Combine Items'){
            let [oldItem, newItem] = item.split(':');
            if (journal.includes(oldItem)){
                let index = journal.indexOf(oldItem);
                journal.splice(index+1, 0, newItem);
            }
            
        } else if (command === 'Renew'){
            if (journal.includes(item)){
                let index = journal.indexOf(item);
                journal.splice(index,1);
                journal.push(item);
            }
        }
        
     }
     console.log(journal.join(', '));




}
// inventory([
//     'Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
//     'Craft!'
// ])
// inventory([
//     'Iron, Sword',
//     'Drop - Bronze',
//     'Combine Items - Sword:Bow',
//     'Renew - Iron',
//     'Craft!'
// ])