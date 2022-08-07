function login(list){
    //the 1st element is the username
    //the correct password is that username reversed
    let username = list.shift();
    let usernameReversed = username.split('').reverse().join('');
    
    let unsuccessfulTries = 0;

     for (let i = 0; i < list.length; i++) {
        let currentPass = list[i];
        
        if (currentPass === usernameReversed){
            console.log(`User ${username} logged in.`);
            break;
        } else {
            unsuccessfulTries++;
            if (unsuccessfulTries === 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }

       
     }



}
// login(['Acer','login','go','let me in','recA'])
// login(['momo','omom'])
//login(['sunny','rainy','cloudy','sunny','not sunny'])