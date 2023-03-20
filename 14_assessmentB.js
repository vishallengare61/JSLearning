
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_Anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "radha", "HR", 74000, "wipro");
const emp_rishi = new Employee(55, "rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "sonali", "Finance", 45000, "infy");
const emp_monika = new Employee(77, "monika", "IT", 40000, "wipro");
const emp_vinay = new Employee(88, "vinay", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "mahi", "HR", 85000, "infy");

console.log("-------------------------all objects added to array--------------------------");

let array_employees = [emp_Anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];

console.log(array_employees);
console.log("-----------------------employee who is working in TCS with his name-----------------");
for (const iterator of array_employees) {
    if (iterator.emp_company=="TCS") {
     console.log(`the employee is ${iterator.emp_name} , and the company is ${iterator.emp_company} `);
    }
}
console.log("---------------employee who working in finance with his name-----------------------");

for (const iterator of array_employees) {
    if (iterator.emp_dept=="Finance") {
        console.log(`the employee is ${iterator.emp_name} and the department is ${iterator.emp_dept}`);
    }
}
console.log("------------------employee whos name starts with 'r'-------------------------------------");

for (const iterator of array_employees) {
    if (iterator.emp_name.startsWith("r")) {
        console.log(iterator);
    }
}
console.log("------------------employee whos salary is greater than 70000---------------------------------");

for (const iterator of array_employees) {
    if (iterator.emp_salary>70000) {
        console.log(iterator);
    }
}
console.log("--------------employee whos salary is 50000 and from IT departmanet-----------------------------");

for (const iterator of array_employees) {
    if (iterator.emp_salary>=50000 && iterator.emp_dept=="IT") {
        console.log(iterator);
    } 
}

console.log("-----------------employee who working in infosys-----------------------------------");

for (const iterator of array_employees) {
    if (iterator.emp_company=="infy") {
        console.log(iterator);
    }
}






// for (const key in emp_Anil) {
//     if (Object.hasOwnProperty.call(emp_Anil, key)) {
//         const element = emp_Anil[key];
//        if (element=="TCS") {
//         console.log(`the name is ${emp_Anil.emp_name} and the company is ${emp_Anil.emp_company}`);
//        }
//     }
// }
// for (const key in emp_radha) {
//     if (Object.hasOwnProperty.call(emp_radha, key)) {
//         const element = emp_radha[key];
//        if (element=="TCS") {
//         console.log(`the name is ${emp_radha.emp_name} and the company is ${emp_radha.emp_company}`);
//        }
//     }
// }
// for (const key in emp_rishi) {
//     if (Object.hasOwnProperty.call(emp_rishi, key)) {
//         const element = emp_rishi[key];
//        if (element=="TCS") {
//         console.log(`the name is ${emp_rishi.emp_name} and the company is ${emp_rishi.emp_company}`);
//        }
//     }
// }
// for (const key in emp_sonali) {
//     if (Object.hasOwnProperty.call(emp_sonali, key)) {
//         const element = emp_sonali[key];
//        if (element=="TCS") {
//         console.log(`the name is ${emp_sonali.emp_name} and the company is ${emp_sonali.emp_company}`);
//        }
//     }
// }
// for (const key in emp_monika) {
//     if (Object.hasOwnProperty.call(emp_monika, key)) {
//         const element = emp_monika[key];
//        if (element=="TCS") {
//         console.log(`the name is ${emp_monika.emp_name} and the company is ${emp_monika.emp_company}`);
//        }
//     }
// }
// for (const key in emp_vinay) {
//     if (Object.hasOwnProperty.call(emp_vinay, key)) {
//         const element = emp_vinay[key];
//        if (element=="TCS") {
//         console.log(`the name is ${emp_vinay.emp_name} and the company is ${emp_vinay.emp_company}`);
//        }
//     }
// }
// for (const key in emp_mahi) {
//     if (Object.hasOwnProperty.call(emp_mahi, key)) {
//         const element = emp_mahi[key];
//        if (element=="TCS") {
//         console.log(`the name is ${emp_mahi.emp_name} and the company is ${emp_mahi.emp_company}`);
//        }
//     }
// }
