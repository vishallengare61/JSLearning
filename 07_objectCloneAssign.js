
const arrayNums = [ 20, 3, 4, 56, 90, 400, 49 ];

const shallowClone = arrayNums;

shallowClone.push(55, 66);
console.log("Original array: ", arrayNums);
console.log("Cloned array: ",shallowClone);

console.log("Deep clone...");

let deepClone = {...arrayNums};
arrayNums.push(10, 25);
console.log("Original array: ", arrayNums);
console.log("Cloned array: ",deepClone);

arrayEven = [ 2, 30, 14, 8];

let mergeArray = arrayNums.concat(arrayEven);

console.log("merged array using concat method: ",mergeArray);

let spreadArray = {...arrayEven, ...arrayNums};

console.log("merged array using spread: ", spreadArray);


const employee_Info = {
    emp_id: 27,
    emp_name: "john doe",
    salary: {
        july_Month: "40,0000INR",
        aug_Month: "50,0000INR",
        jun_Month: "65,0000INR"
    },
    address:{
        locality:{
            colony: "OM vrindavan sociaty",
            street: "kanch pokli, 413306"
        },
        city: "Mumbai",
        state: "Maharastra",
        country: "India"
    },
    mobiles: ["8806014060", "9921667384", "9322652665"]
}

//Address: Locality, city, state and country 

console.log(employee_Info.address);
console.log(employee_Info.mobiles);


//Perform deep copy using JSON.stringfy( )
//a. Update property ‘july_month’ salary to 80K on cloned object

let jsonObject  = JSON.parse(JSON.stringify(employee_Info));
jsonObject.employee_Info.salary.july_Month="80,0000INR";

jsonObject.employee_Info.country="United kingdom";

console.log(employee_Info);
console.log(jsonObject);