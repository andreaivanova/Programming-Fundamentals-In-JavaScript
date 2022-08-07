function bonusScoringSystem(arr) {
    arr = arr.map(Number);
    let students = arr[0];
    let totalLectures = arr[1];
    let additionalBonus = arr[2];
    let bonusesArr = [0, 0, 0];
    for (let i = 3; i < arr.length; i++) {
        let attendances = arr[i];
        let totalBonus = attendances / totalLectures * (5 + additionalBonus);
        bonusesArr.push(totalBonus);
    }
    let maxBonus = Math.max(...bonusesArr);
    let indexOfMaxBonus = bonusesArr.indexOf(maxBonus);
    let attendancesOfMaxBonus = arr[indexOfMaxBonus];
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${attendancesOfMaxBonus} lectures.`);

}
bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])

