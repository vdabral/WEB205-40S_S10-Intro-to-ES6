const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
        { name: "Alice", className: "Grade 5", scores: { math: 95, science: 88, history: 85, english: 92 } },
        { name: "Bob", className: "Grade 4", scores: { math: 80, science: 78, history: 92, english: 85 } },
        { name: "Charlie", className: "Grade 5", scores: { math: 88, science: 90, history: 78, english: 88 } },
        { name: "Diana", className: "Grade 4", scores: { math: 92, science: 85, history: 88, english: 90 } },
    ],
};

function countCalculation(school) {
    const mathTeachersCount = school.departments.math.teachers;
    const historyTeachersCount = school.departments.history.teachers;
    const mathStudentsCount = school.departments.math.students;
    const historyStudentsCount = school.departments.history.students;

    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
}

console.log(countCalculation(school));

function findTopStudent(school, courseName) {
    let topStudent = null;
    let highestScore = -1;

    for (let i = 0; i < school.students.length; i++) {
        const student = school.students[i];
        const score = student.scores[courseName];

        if (score > highestScore) {
            highestScore = score;
            topStudent = student;
        }
    }
    
    return topStudent;
}

console.log(findTopStudent(school, 'math'));

function addNewDept(school, newDepartment) {
    return {
        ...school,
        departments: {
            ...school.departments,
            ...newDepartment
        }
    };
}

const newDepartment = { art: { teachers: 2, students: 50 } };
console.log(addNewDept(school, newDepartment));

function highestStudentCountDepartment(school) {
    let highestDept = '';
    let highestCount = 0;

    for (const dept in school.departments) {
        const studentsCount = school.departments[dept].students;
        
        if (studentsCount > highestCount) {
            highestCount = studentsCount;
            highestDept = dept;
        }
    }
    
    return highestDept;
}

console.log(highestStudentCountDepartment(school));

function generateGreeting(name, language = 'English') {
    const greetings = {
        English: "Hello",
        Spanish: "¡Hola",
        French: "Bonjour"
    };
    
    const greeting = greetings[language] || greetings.English;
    return `${greeting}, ${name}!`;
}

console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));
