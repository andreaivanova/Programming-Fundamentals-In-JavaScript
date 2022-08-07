function formatGrade(grade) {
    let output = '';


    if (grade >= 2 && grade < 3) {
        output = 'Fail';
        grade = Math.trunc(grade);
    } else if (grade >= 3 && grade < 3.50) {
        output = 'Poor';
        grade = grade.toFixed(2);
    } else if (grade >= 3.50 && grade < 4.50) {
        output = 'Good';
        grade = grade.toFixed(2);
    } else if (grade >= 4.50 && grade < 5.50) {
        output = 'Very good';
        grade = grade.toFixed(2);
    } else if (grade >= 5.50) {
        output = 'Excellent';
        grade = grade.toFixed(2);
    }

    console.log(`${output} (${grade})`);

}

formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.50)
