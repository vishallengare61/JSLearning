
console.log("1------------------Given string length and square---------------------");
function squareOfWordLength(str1){
    console.log(`1.1   The given string is ${str1}`);

var wordlength = str1.length;
console.log(`1.2   The length of the word:${wordlength}`);

var result = wordlength ** 2;
return result;


}

var square = squareOfWordLength("JavaScript");

console.log(`l.3   The length square of the string is :${square}`);

console.log("*********************************************************************");


var square = squareOfWordLength("Google Chrome");
console.log(`l.3   The length square of the string is :${square} `);

console.log("*********************************************************************");

var square = squareOfWordLength("Developer Smart");
console.log(`l.3   The length square of the string is :${square} `);


console.log("2------------------Given string length Devide and multiply---------------------");

var str2 = "I am Angular Developer";

console.log(`2.1   The length of the string is : ${str2.length}`);
var strlength = str2.length;
var word2 = str2.split(" ");
// console.log(word2);
console.log(`2.2   The total nummber of words in string is : ${word2.length}`);

var wordlength = word2.length;

var result2 = strlength / wordlength;


var result3 = strlength * wordlength;

console.log(`2.3   The dividation of length and  words in string is : ${result2}`);

console.log(`2.4   The multiplication of length and  words in string is : ${result3}`);


console.log("2------------------Thank you---------------------");





