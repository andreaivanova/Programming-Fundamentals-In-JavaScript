function sortAnArrBy2Criteria(arr) {
    let sorted = arr.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);
        return firstCriteria || secondCriteria; //казваме му сортирай по 1вото или по 2рото
        //or et sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
        //    console.log(sorted.join(`\n`));
    }
    )
    
    console.log(sorted.join(`\n`));
    // function sortAnArrayBy2Criteria(arr) {
    //     arr.sort((a, b) => {
    //         if (a.length !== b.length) {
    //             return a.length - b.length;
    //         } 
    //         return a.localeCompare(b);
    
    
    
    
    //     })
    
    // console.log(arr.join('\n'));
    
    // }
    


}
sortAnArrBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);