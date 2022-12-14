function schoolRegister(input) {
    const passedStudents = [];  // Array of student objects with grade higher than 2.99
   
    // Pushing all the passed students (higher than 2.99)
    for (const elem of input) {
      let student = elem.split(', ');
      let name = student[0].replace('Student name: ', '');
      let grade = Number(student[1].replace('Grade: ', ''));
      let averageScore = Number(
        student[2].replace('Graduated with an average score: ', '')
      );
   
      // Creating the object
      let studentObj = {
        name,
        grade,
        averageScore,
      };
   
      if (studentObj.averageScore >= 3.00) {
        passedStudents.push(studentObj);
      }
    }
   
    // Sorting the students by grade
    const sortedStudents = passedStudents.sort((a, b) => a.grade - b.grade);
   
    let previousGrade = 0;  // To check if the grade is the same
   
    for (const student of sortedStudents) {
      let currentStudents = [];   // Holds the current grade student names
      let currentAverage = 0;     // Current grade average score
      let gradeSum = 0;
      let currentGrade = student.grade;
   
      // If the grade is the same, continue to the next student
      if (currentGrade === previousGrade) {
        continue;
      }
   
      console.log(`${currentGrade + 1} Grade`);
   
      // Pushes all of the current grade student names and sums their score
      sortedStudents.forEach(student => {
        if (student.grade === currentGrade) {
          currentStudents.push(student.name);
          gradeSum += student.averageScore;
        }
      });
   
      // Printing the student names
      console.log(`List of students: ${currentStudents.join(', ')}`);
   
      // Calculating and printing the average grade score
      currentAverage = (gradeSum / currentStudents.length).toFixed(2);
      console.log(`Average annual score from last year: ${currentAverage}\n`);
      
      previousGrade = currentGrade;
    }
  }
   
  // Test 1 
  console.log('\n----------------Test 1----------------\n');
   
  schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
  ]);
   
  /* Results: 
    9 Grade
    List of students: Mark, Daryl
    Average annual score from last year: 5.35
   
    10 Grade
    List of students: Ethan, Joey, Bill
    Average annual score from last year: 5.52
   
    11 Grade
    List of students: Steven, Philip, Gavin
    Average annual score from last year: 4.42
   
    12 Grade
    List of students: Bob, Peter
    Average annual score from last year: 5.02
  */
   
  // Test 2
  console.log('\n----------------Test 2----------------\n');
   
  schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Bobby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Gary, Grade: 1, Graduated with an average score: 5.15'
  ]);
   
  /* Results: 
    2 Grade
    List of students: Gary
    Average annual score from last year: 5.15
   
    3 Grade
    List of students: Steven
    Average annual score from last year: 4.90
   
    6 Grade
    List of students: Bobby
    Average annual score from last year: 4.20
   
    10 Grade
    List of students: Alex
    Average annual score from last year: 3.66
  */