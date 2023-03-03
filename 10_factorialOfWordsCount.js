
// function factorialOfWordsCount(str){

// var char = 1;
// if (!str || str.trim().length === 0 || isNaN(parseInt(str))) {
//     console.log(`Please enter a valid string with at least one word.`);
//     return NaN;
//   }
//   var words = str.split(" ");
// console.log(`the string is "${str}" and the total number of words is ${words.length}`);





// for (let index = 1; index <= words.length; index++) {
//     if (str == " " || str == NaN || str == undefined || str == null) {
//         console.log(`Plz enter a valid number`);
//         return NaN;
//     }else{
//         char = char * index;
//     }
//     }

// return char;
// }

// var result = factorialOfWordsCount("Rivision is the mother of success");
// console.log(`the factorial is ${result}`);
// console.log("----------------------------------------------------------------");
// var result = factorialOfWordsCount("We never fail, we always learn");
// console.log(`the factorial is ${result}`);
// console.log("----------------------------------------------------------------");
// var result = factorialOfWordsCount("Vishal Birudev Lengare");
// console.log(`the factorial is ${result}`);
// console.log("----------------------------------------------------------------");
// var result = factorialOfWordsCount("");
// console.log(`the factorial is ${result}`);
// console.log("----------------------------------------------------------------");
// // var result = factorialOfWordsCount(null);
// // console.log(`the factorial is ${result}`);
// // console.log("----------------------------------------------------------------");
// // var result = factorialOfWordsCount(undefined);
// // console.log(`the factorial is ${result}`);
// // console.log("----------------------------------------------------------------");

function factorialOfWordsCount(str) {
    // Check for null, undefined, NaN, or empty string
    if (!str || str.length === 0) {
      console.log(`Please enter a valid string with at least one word.`);
      return NaN;
    }
  
    // Split the string into an array of words and count the number of words
    var words = str.split(" ");
    var wordCount = words.length;
    console.log(`The string is "${str}" and the total number of words are ${wordCount}`);
    // Calculate the factorial of the word count using a for loop
    var result = 1;
    for (var i = 1; i <= wordCount; i++) {
      result *= i;
    }
  
    return result;
  }
  
 var result = factorialOfWordsCount("Rivision is the mother of success");
console.log(`the factorial is ${result}`);
console.log("----------------------------------------------------------------");
var result = factorialOfWordsCount("We never fail, we always learn");
console.log(`the factorial is ${result}`);
console.log("----------------------------------------------------------------");
var result = factorialOfWordsCount("");
console.log(`the factorial is ${result}`);
console.log("----------------------------------------------------------------");
var result = factorialOfWordsCount(null);
console.log(`the factorial is ${result}`);
console.log("----------------------------------------------------------------");
var result = factorialOfWordsCount("Vishal Birudev Lengare");
console.log(`the factorial is ${result}`);
console.log("----------------------------------------------------------------");
