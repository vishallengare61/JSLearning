

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


let employee = [emp_Anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahi];


console.log("------------employee who worke in TCS------------------");
employee.forEach(element => {
    if (element.emp_company=="TCS") {
        console.log(`the employee name is: ${element.emp_name} and company name is: ${element.emp_company}`);
    }
});

console.log("------------employee whos salary is greater than or equal to 50000------------------");


employee.forEach(element => {
    if (element.emp_salary >= 50000) {
        console.log(`the employee whos salary is more than  or equal to 50k: ${element.emp_name}`);
    }
});

console.log("------------the sum of all employee salary------------------");
let sum = 0;
employee.forEach(element => {
     sum = element.emp_salary + sum;
});
console.log(`the sum of all employee salary: ${sum}`);



console.log("------------find the avarage salary------------------");
let avarage = 0;
employee.forEach(element => {
    console.log(avarage = sum /  employee.length);
});





console.log("------------Employee who belongs to IT or HR dept and salary is greater than equal to 75k-----------------");

employee.forEach(element => {
    if (element.emp_dept=="IT" || element.emp_dept=="HR" && element.emp_salary >= 75000) {
        console.log(element);
    }
});