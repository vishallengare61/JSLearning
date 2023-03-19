

const sbi_bank = {
    bankName: "SBI",
    accType: "Saving",
    manager: "Mr.shaha",
    branchName: "Hinjewadi phase:1"
};
console.log("Create the sbi_bank object-");
console.log(sbi_bank);

const bank_Location = {
    street: "main raod",
    city: "Pune",
    pinCode: 413306,
};
console.log("Create the bank_Location object-");
console.log(bank_Location);

//clone object using assign()
console.log("create a clone of both objects by using Object.assign()");
const cloneObject = Object.assign({}, sbi_bank, bank_Location);
console.log(cloneObject);

//clone object using ... spread operator
console.log("create a clone of both objects by using spread operator");

const clone1 = {...sbi_bank, ...bank_Location};

console.log(clone1);


const literalObject = {
    home_loan_interest: 5, 
    personal_loan_interest: 7, 
    due_interest:  9
};

console.log("create a new object literalObject");
console.log(literalObject);


console.log("create a clone of three objects using both .assign() and spread");
const sbi_details = {...sbi_bank, ...bank_Location, ...literalObject}
console.log(sbi_details);

const sbi_details2 = Object.assign({}, sbi_bank, bank_Location, literalObject);
console.log(sbi_details2);

console.log("traverse the final object by using for in loop");
for (const key in sbi_details2) {
    if (Object.hasOwnProperty.call(sbi_details2, key)) {
        const element = sbi_details2[key];
        console.log(element);
    }
}