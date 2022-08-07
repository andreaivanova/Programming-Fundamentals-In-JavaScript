function schoolRegister(input) {
    let arr = [];
    let arrOfObjs = [];
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let [studentName, grade, averageScore] = input[i].split(', ')
        studentName = studentName.split(': ').pop();
        grade = Number(grade.split(': ').pop());
        averageScore = Number(averageScore.split(': ').pop());
        obj= {
            studentName,
            grade,
            averageScore,
        }
        arrOfObjs.push(obj);
    }
    for (const element of arrOfObjs) {
        if (element['averageScore'] >= 3) {
            arr.push([element['studentName'], element['grade'], element['averageScore']]);
        }
    }
    arr.sort((a, b) => a[1] - b[1]);


    let currentGrade = 0;
    let students = [];
    let studentsCurrentGrade = 0;
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        let studentGrade = arr[j][1];
        if (currentGrade === 0) {
            currentGrade = studentGrade;
        }
        if (studentGrade === currentGrade) {
            students.push(arr[j][0]);
            sum += arr[j][2];
            studentsCurrentGrade++;
            if (j === arr.length - 1) {
                let avgScore = sum / studentsCurrentGrade;
                console.log(`${currentGrade + 1} Grade`);
                console.log(`List of students: ${students.join(', ')}`);
                console.log(`Average annual score from last year: ${avgScore.toFixed(2)}\n`);
               
            }
        } else {
            let avgScore = sum / studentsCurrentGrade;
            console.log(`${currentGrade + 1} Grade`);
            console.log(`List of students: ${students.join(', ')}`);
            console.log(`Average annual score from last year: ${avgScore.toFixed(2)}\n`);
            // console.log();
            currentGrade = studentGrade;
            students = [];
            sum = 0;
            avgScore = 0;
            studentsCurrentGrade = 0;
            j--;
        }

    }
}
// schoolRegister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ]);
// console.log('----------------');
// schoolRegister([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ]);
// console.log(`------------------------------`);
// schoolRegister(['Student name: gfnui, Grade: 2, Graduated with an average score: 2.75',
//     'Student name: crfhjk, Grade: 5, Graduated with an average score: 3.66',
//     'Student name: tyucve, Grade: 4, Graduated with an average score: 5.83',
//     'Student name: huftn, Grade: 4, Graduated with an average score: 6.00',
//     'Student name: yuiny, Grade: 5, Graduated with an average score: 2.90',
//     'Student name: fty, Grade: 3, Graduated with an average score: 3.90',
//     'Student name: uuavt, Grade: 1, Graduated with an average score: 5.15',
//     'Student name: jiohuftn, Grade: 3, Graduated with an average score: 5.20',
//     'Student name: ny, Grade: 1, Graduated with an average score: 4.90',
//     'Student name: fty, Grade: 2, Graduated with an average score: 6.00'])