

const professor = {

    fName: "Ram",
    lName: "shinde",
    age: 35,
    tSubject: "Angular JS",
    City: "Solapur",
    mobileNumber: 1234567891,
    degrees:{
        degree1: "engineering",
        degree2: "CSC",
        degree3: "PHD",
        degree4: "Advance computing",
        degree5: "master in computer science",
    },
    certificates:["Hacker Rank participation", "certificate in IFE course", "certificate in advance programming"],

    teachersDegrees:function(){
        var char = "";
        for (var key in professor.degrees) {
            if (Object.hasOwnProperty.call(professor.degrees, key)) {
                var element = professor.degrees[key];
                char = char + element;
                return char;
                
            }
        }

    }

};

console.log("------------------create and print the object array-----------");
console.log(professor);

console.log("------------------print the all certicates-----------");

for (const key in professor.degrees) {
    if (Object.hasOwnProperty.call(professor.degrees, key)) {
        const element = professor.degrees[key];
        
    }

    console.log(`The certicates of teachers are: ${professor.certificates}`);

}

// let lengthDegrees = professor.degrees.length;
// console.log(lengthDegrees);
console.log("------------------print the all proffesor's degrees-----------");


const valuesOfEmployee = Object.values(professor.degrees);
console.log(valuesOfEmployee);


console.log("------------------Add experince of proffesor-----------");

professor.totalExpereince= 14;
console.log(professor);

console.log("------------------change the city of proffesor-----------");

professor.City = "pune";
console.log(professor);

console.log("------------------Add the oracle certificate in array -----------");

professor.certificates.push("oracle certificate");

console.log("------------------print the last cerificate in array-----------");

let aa = professor.certificates[professor.certificates.length-1];
console.log("The last certificate in array is: ",aa);

