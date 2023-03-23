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



const mapEmployee = new Map();
mapEmployee.set(emp_Anil.emp_id, emp_Anil);
mapEmployee.set(emp_radha.emp_id, emp_radha);
mapEmployee.set(emp_rishi.emp_id, emp_rishi);
mapEmployee.set(emp_sonali.emp_id, emp_sonali);
mapEmployee.set(emp_monika.emp_id, emp_monika);
mapEmployee.set(emp_vinay.emp_id, emp_vinay);
mapEmployee.set(emp_mahi.emp_id, emp_mahi);


mapEmployee.forEach((key, value) => {
    console.log(key, value);
} );


// const emp22 = mapEmployee.get(22);
// console.log(emp22); // Output: Employee { emp_id: 22, emp_name: 'Anil', emp_dept: 'IT', emp_salary: 50000, emp_company: 'TCS' }



