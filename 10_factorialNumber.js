function factorailOfNum(str) {


  if (!str || str.length === 0) {
    console.log(`Please enter a valid string with at least one word.`);
    return NaN;
  }

  console.log(`the number is ${str}`);
  var char = 1;
  for (var index = 1; index <= str; index++) {
    if (str == " " || str == NaN || str == undefined || str == null) {
      console.log(`Plz enter a valid number`);
      return NaN;
    } else {
      char = char * index;
    }
  }
  return char;
}
var result = factorailOfNum(5);
console.log(`the facorial is  ${result}`);
console.log("--------------------------------");
var result = factorailOfNum(3);
console.log(`the facorial is  ${result}`);
console.log("--------------------------------");

var result = factorailOfNum(null);
console.log(`the facorial is  ${result}`);
console.log("--------------------------------");

var result = factorailOfNum(8);
console.log(`the facorial is  ${result}`);
console.log("--------------------------------");

var result = factorailOfNum(undefined);
console.log(`the facorial is  ${result}`);
console.log("--------------------------------");

var result = factorailOfNum(9);
console.log(`the facorial is  ${result}`);
console.log("--------------------------------");

var result = factorailOfNum(0);
console.log(`the facorial is  ${result}`);

console.log("--------------------------------");

