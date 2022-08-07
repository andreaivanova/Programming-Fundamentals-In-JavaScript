function phoneBook(arr){
    let assocArr = {};
    for (let element of arr) {
        let [name, number] = element.split(' ');
        assocArr[name] = number;
    }
    for (const key in assocArr) {
     console.log(key + ' -> ' + assocArr[key]);
            
        }
    }




phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)
phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)