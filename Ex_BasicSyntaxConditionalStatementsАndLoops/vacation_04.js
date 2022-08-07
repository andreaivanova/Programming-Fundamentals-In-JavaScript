function vacation(numberOfPeople, groupType, dayOfTheWeek) {
    let price = 0;
    switch (groupType) {
    
        case 'Students':
            switch (dayOfTheWeek) {
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.8;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
            }
            break;
        case 'Business':
            switch (dayOfTheWeek) {
                case 'Friday':
                    price = 10.90;
                    break;
                case 'Saturday':
                    price = 15.6;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
            }
            break;
        case 'Regular':
            switch (dayOfTheWeek) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.5;
                    break;
            }
            break;


    }
    let totalPrice = price * numberOfPeople
    if (groupType === 'Students' && numberOfPeople >= 30){
        totalPrice -= totalPrice * 0.15;
    } else if (groupType === 'Business' && numberOfPeople >= 100){
        totalPrice -= price * 10;
    } else if (groupType === 'Regular' && (numberOfPeople >= 10 && numberOfPeople <= 20)){
        totalPrice -= totalPrice * 0.05;
    }  
console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")