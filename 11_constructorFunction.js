class Person {
  constructor(fullName, city) {
    this.fullName = fullName;
    this.city = city;
  }
}
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubham Gill", "Mumbai");

console.log(personDhoni instanceof Person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);

// imp-------------------function prototype----------------------------------------------------

function Person1(fullName, city) {
  this.fullName = fullName;
  this.city = city;
  this.show = function () {
    console.log(`${this.fullName} ${this.city}`);
  };
}
Person.prototype.country = "India";

const dhoni = new Person("MS Dhoni", "Ranchi");
dhoni.show();
console.log(dhoni.country);

const gill = new Person("Shubam Gill", "Mumbai");
gill.show();
console.log(gill.country);

const ash = new Person("R Ashwin", "Chenai");
ash.show();
console.log(ash.country);

console.log("Deep clone using spread operator");
const newPlayer = { ...person }; // Deep clone using spread operator 
console.log(newPlayer); newPlayer.age = 42; 
console.log(`newPlayer ==> ${newPlayer.fullName} ${newPlayer.age}`); 
console.log(`person ==> ${person.fullName} ${person.age}`);

console.log("Deep clone using spread String.json()");
 const bank = { bankName: "SBI Bank", accountNo: 3456789, bankAddress: { city: "Banglore", PIN: 5556677 } }
  const newBank = JSON.parse(JSON.stringify(bank)); newBank.bankAddress.PIN = 999999; 
  console.log(`bank==> ${bank.bankAddress.PIN}`);// console.log(`newBank==> ${newBank.bankAddress.PIN}`);//

  