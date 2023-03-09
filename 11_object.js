

const student = {

    firstName: "Vishal",
    lastName: "Lengare",
    collageName: "VIMS",
    rollNumber: 022,
    age: 22,
    isWorking: false,
    address : {
        street:bandgarwadi,
        PIN: "413306",
        city: sangola
    },
    school: ZPPschool,
    freinds: [vishal, rahul, munna]
};

student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}
console.log(student);

console.log(typeof (student));

console.log(student);
console.log(typeof student);
// . Dot Notation
console.log(student.firstName);

// [] Notation
console.log(student["lastName"]);

student.collageName="SMS";

console.log(student.collageName);

student.city= "mumbai";
