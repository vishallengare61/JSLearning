
const personalDetails = {

    fName: "Vishal",
    lName: "Lengare",
    age: 22,
    isMarried: false
}

const collageDetails = {
    cName: "VIMS",
    cAddress: "Sangola",
    roll: 910594
}

let mergeTwoObjects = Object.assign({},personalDetails, collageDetails);
console.log("Merge the two objects: ",mergeTwoObjects);

const freindsArray = ["ashish", "akash", "rahul", "amol", "prashant"];

Object.freeze(freindsArray);

for (const iterator of freindsArray) {
    
    console.log(iterator);
}

//let string = "Codemind Technology";
function reverseLastWord(string) {
    var char = "";
    for (let index = string.length - 1; index >= 0; index--) {
      var reverse = string.charAt(index);
      char = char + reverse;
      if (reverse == " ") {
        break;
      }
    }
    return char;
  }
let result = reverseLastWord("Codemind Technology");
console.log(result);