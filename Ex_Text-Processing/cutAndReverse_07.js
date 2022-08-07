function cutAndReverse(str){
    let half = Math.ceil(str.length / 2);
    let firstHalf = str.slice(0, half);
    let secondHalf = str.slice(-half);
    firstHalf = firstHalf.split('').reverse().join('');
    secondHalf = secondHalf.split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');