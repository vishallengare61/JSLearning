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


const array = [emp_Anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];

array.filter(element=>{
    if (element.emp_company=="TCS") {
        console.log(`the employee: ${element.emp_name} is working in: ${element.emp_company}`);
    }
});

// const avarageSalary = array.filter(element=>{
//     if (element.emp_company=="wipro") {
//        console.log(element.emp_salary); 
//     }
// });


const employees = [emp_Anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];

const wiproEmployees = employees.filter(emp => emp.emp_company === 'wipro');

const wiproSalaries = wiproEmployees.map(emp => emp.emp_salary);

const sum = wiproSalaries.reduce((acc, curr) => acc + curr);

const average = sum / wiproEmployees.length;

console.log(`The average salary of employees from the company "wipro" is: ${average}`);



// Filter employees from "wipro" and "infy"
const wiproAndInfyEmployees = [emp_radha, emp_sonali, emp_monika, emp_mahi].filter(emp => emp.emp_company === "wipro" || emp.emp_company === "infy");

// Calculate the average salary of the filtered employees
const totalSalary = wiproAndInfyEmployees.reduce((acc, emp) => acc + emp.emp_salary, 0);
const averageSalary = totalSalary / wiproAndInfyEmployees.length;

console.log(`The average salary of employees from Wipro and Infy is ${averageSalary}`);
