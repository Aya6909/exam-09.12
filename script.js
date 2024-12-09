// tapsirma 1
let school = {
    name: "Amjit",
    phoneNumber: "7-224-222-2345",
    students: [
        { studentName: 'Uldana', top: 'three', progress: '80', lessons: '2'},
        { studentName: 'Ali', top: 'three', progress: '90', lessons: '4'},
        { studentName: 'Aiganim', top: 'for', progress: '70', lessons: '5'},
        { studentName: 'Baxa', top: 'two', progress: '100', lessons: '6'},
        { studentName: 'Aya', top: 'two', progress: '60', lessons: '7'}
    ]
};


//tapsirma 2
function changeSchoolName(){
    let newNameSchool = prompt('жаңа атауды жазыңыз: ');
    if (newNameSchool){
        school.name = newNameSchool;
        alert(`Мектеп жаңа атауы: ${school.name}`);
    }
}


//tapsirma 3
function changePhoneNumber() {
    let newNumber = prompt("Жаңа телефон нөмірін енгізіңіз: ");
    if (newNumber){
        school.phoneNumber = newNumber;
        alert(`Телефон нөмірі жаңартылды: ${school.phoneNumber}`);
    } else {
        alert(`Телефон нөмірі өзгермеді: ${school.phoneNumber}`);
    }
}


//tapsirma 4
function listStudentNames() {
    let studentName = school.students.map(students => students.studentName).join("\n");
    alert(`Студенттердін атаулары:\n${studentName}`);
}


//tapsirma 5
function addStudent(){
    let newstudentName = prompt('студент атын жазыңыз: ');
    let newstudenttop = prompt('студент тобын жазыңыз: ');
    let newstudentprogress = prompt('студент орташа үлгерімін жазыңыз: ');
    let newstudentlessons = prompt('студент сабақ санын жазыңыз: ');

    if (studentName && top && !isNaN(progress) && !isNaN(lessons)) {
        school.students.push({ newstudentName, newstudenttop, newstudentprogress, newstudentlessons });
        alert(" Жаңа студент қосылды!");
    } else {
        alert("Қате деректер енгізілді.");
    }
};

//tapsirma 6

function applyDecreaseToTop(){
    let top = prompt("арқылы топ атауы кандай: ");
    let jenildik = Number(prompt("қанша пайызға төмендету керек: "));

    if (top && !isNaN(jenildik) && jenildik > 0) {
        school.students.forEach(student => {
            if (student.top === top) {
                student.progress = student.progress * (1 - jenildik / 100);
            }
        });
        alert(`${top} тобына жеңілдік жасалды.`);
    } else {
        alert("Қате деректер енгізілді.");
    }
};

function menu() {
    let choice;
    do {
        choice = prompt(
            "Мәзір:\n" +
            "1. Оқу орталығынын атауын өзгерту\n" +
            "2. Телефон нөмірін өзгерту\n" +
            "3. Барлық студенттерді көру\n" +
            "4. Жаңа студент қосу\n" +
            "5. Белгілі бір топқа пайыздық мөлшерде орташа үлгерімін төмендету\n" +
            "6. Тоқтат\n" +
            "Таңдауыңызды енгізіңіз:"
        );

        switch (choice) {
            case "1":
                changeSchoolName();
                break;
            case "2":
                changePhoneNumber();
                break;
            case "3":
                listStudentNames();
                break;
            case "4":
                addStudent();
                break;
            case "5":
                applyDecreaseToTop();
                break;
            case "6":
                alert("Сау болыңыз!");
                break;
            default:
                alert("Қате таңдау. Қайталап көріңіз.");
        }
    } while (choice !== "6");
}

menu();

