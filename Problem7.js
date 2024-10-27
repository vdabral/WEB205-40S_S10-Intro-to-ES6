function highestPaid(employees) {
    let highest = employees[0];
    for (let i = 1; i < employees.length; i++) {
        if (employees[i].salary > highest.salary) {
            highest = employees[i];
        }
    }
    return highest;
}

const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];
console.log(highestPaid(employees1));

function destructuringToSwap(employees) {
    if (employees.length < 2) return employees;
    let temp = employees[0];
    employees[0] = employees[employees.length - 1];
    employees[employees.length - 1] = temp;
    return employees;
}

const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];
console.log(destructuringToSwap(employees2));
