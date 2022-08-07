function printCertificate(grade, names) {
    if (pass(grade)) //tozi grade e stoinostta ot printCertificate 
    { //pass(grade) go pishem taka i to shte vyrne true ili false 
        //tova e sushtoto kato da sme vzeli proverkata ot pass(grade) koqto e if grade >= 3 
        // i da q vkarame tuka gore v tozi if, zashtoto pass e funkciq koqto shte vurne true ili false
        //
        printHeader();
        printName(names);
        formatGrade(grade);

    } else {
        console.log(`${names[0]} ${names[1]} does not qualify`);
    }

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }
    function printName(nameArr) {
        console.log(nameArr[0] + ' ' + nameArr[1]);
        // imenata na promenlivite gore pri skobite moje da si gi krushtavame
        //kakto si iskame i gore pri izvikvaneto na funkciqta shte podadem drugo ime
        //i tova nqma da e ot znachenie
        //imeto v skobite(parametyra) na vlojenata funkciq e unikalen samo za neq 
        //i ne vaji za maichinata funkciq
    }
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
    
    function pass(grade) {
        return grade >= 3;
    }
}


printCertificate(2.59, ['Andrea', 'Ivanova'])