class vehical{

constructor(vehicalName, vehicalMilage, vehicalColor, vehicalNumber, vehicalEngine, vehicalPrice){
    this.vehicalName = vehicalName;
    this.vehicalMilage = vehicalMilage;
    this.vehicalColor = vehicalColor;
    this.vehicalNumber = vehicalNumber;
    this.vehicalEngine = vehicalEngine;
    this.vehicalPrice = vehicalPrice;
}    
}
console.log("---------------first task-----------------");


const tataafari = new vehical("Tata safari", 25, "Red", "MH 45 6434", "Disel", 1000000);
console.log(tataafari);
const scorpio = new vehical("Scorpio", 28, "white", "MH 13 6434", "Disel", 1500000);
console.log(scorpio);
const tharMahindra = new vehical("Thar Mahindra", 20, "black", "MH 45 6434", "Disel", 3500000);
console.log(tharMahindra);
const maruti = new vehical("Maruti", 35, "yello", "MH 10 6434", "Disel", 800000);
console.log(maruti);
const audi = new vehical("Audi", 25, "Rewhited", "MH 45 6434", "Disel", 6500000);
console.log(audi);


class collage{
    constructor(name, city, professors, students, isGovernmebt){
        this.name = name;
        this.city = city;
        this.professors = professors;
        this.students = students;
        this.isGovernmebt = isGovernmebt;
    }
}

console.log("---------------second task-----------------");


const collage1 = new collage("VIMS", "Sangola", 50, 3000, "Government");
console.log(collage1);
const collage2 = new collage("SMS", "Sangola", 60, 4000, "non-Government");
console.log(collage2);
const collage3 = new collage("fabtect", "Sangola", 70, 5000, "semi-Government");
console.log(collage3);
const collage4 = new collage("sveri", "Sangola", 80, 6000, "non-Government");
console.log(collage4);



const arrayObject = [collage1, collage2, collage3, collage4];

console.log("---------------third task-----------------");


function travesreObject(){

    for (const key in arrayObject) {
        if (Object.hasOwnProperty.call(arrayObject, key)) {
            const element = arrayObject[key];
            console.log(element);
        }
    }
}



travesreObject(arrayObject);


function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
console.log("---------------forth task-----------------");
  
  console.log(`The 11 number is prime: `,isPrime(11));