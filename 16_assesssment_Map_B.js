
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

let eName = [];
 array.forEach(element => {
     eName.push(element.emp_name);
});
console.log("List of all employee names");
console.log(eName);



console.log("List of all employee departments");
let dept = [];
array.forEach(element => {
    dept.push(element.emp_dept);
});
console.log(dept);


console.log("List of all employee Id's");
let ids = [];
array.forEach(element => {
    ids.push(element.emp_id)
});
console.log(ids);


console.log("List of all employee who works in TCS");

let TCSEmp = [];
array.forEach(element => {
    if (element.emp_company=="TCS") {
        TCSEmp.push(element.emp_name)
    }
});
console.log(TCSEmp);















// const mapOfNumbers = new Map();

// mapOfNumbers.set("One", emp_Anil);
// mapOfNumbers.set("Two", emp_radha);
// mapOfNumbers.set("Three", emp_rishi);
// mapOfNumbers.set("four", emp_sonali);
// mapOfNumbers.set("Five", emp_monika);
// mapOfNumbers.set("Six", emp_vinay);
// mapOfNumbers.set("Seven", emp_mahi);


// mapOfNumbers.forEach((key, value) => {
//     console.log(key, value);
// } );