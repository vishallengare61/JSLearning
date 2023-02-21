

var str1 = "     Hey you are doing good, keep it up       ";

console.log(" ---------------------task first------------------");
console.log("print the string as it is:",str1);

console.log(" ---------------------task second------------------");

console.log("The length of the given string is:", str1.length);


console.log(" ---------------------task third------------------");

var trimResult1 = str1.trimStart();

// var trimResult1 = str1.trimStart.trimEnd();
// console.log("000000000",trimResult1)

console.log("first spaces removed :", trimResult1);
console.log("After removing the first extra spaces the length is:", trimResult1.length);



var trimResult2 = str1.trimEnd();
console.log("last spaces removed :", trimResult2);
console.log("After removing the end extra spaces the length is:", trimResult2.length);




var spaces1 = str1.length - trimResult1.length;
var spaces2 = str1.length - trimResult2.length;




var removedspace = spaces1 + spaces2;

console.log(" ---------------------task forth------------------");


console.log("Total number of removed spaces from first and end is :" , removedspace);

console.log(" ---------------------task fifth------------------");

console.log("First letter of string is :", trimResult1.charAt(0) ," & ", "last letter of string is :" ,  trimResult2.charAt(trimResult2.length-1));








var removeAllSpaces = str1.trim();
var result1 = removeAllSpaces.split(" ");
var numWords = result1.length;
console.log(" ---------------------task sixth------------------");

console.log("Total number of words in string after triming both side :",numWords);

console.log(" ---------------------task seventh------------------");

console.log("Index number of word good is :",removeAllSpaces.indexOf("good"));

console.log(" ---------------------task eights------------------");

console.log("substring starting from index 22 by using substring() is:" , removeAllSpaces.substring(22) );
console.log("substring starting from index 22 by using slice() is:" , removeAllSpaces.slice(22) );

console.log(" ---------------------task ninth------------------");

console.log("string ends with word up ?", removeAllSpaces.endsWith("up"));
console.log(" ---------------------task tenth------------------");

console.log("string starts with word Hey ?", removeAllSpaces.startsWith("Hey"));


console.log(" ---------------------task eleventh------------------");

console.log("Finally Length of String is :" ,removeAllSpaces.length);











