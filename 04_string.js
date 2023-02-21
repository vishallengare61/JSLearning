var greet = "Good Morning";

console.log(typeof greet);

console.log("total number of length available in string greet:");

var glength = greet.length;
console.log(glength);



console.log("finding the character by index value");
var  charAtIndex3  = greet.charAt(3);

console.log("Character available at index 3 is : ", charAtIndex3);

var charAtlastIndex = greet.charAt(glength-1);
console.log("Last char is :-",charAtlastIndex);

console.log("Find the index by char:");
var indexofM = greet.indexOf('M');

console.log("the index of char M is", indexofM);


console.log("Index of char which is not available into the string: ", greet.indexOf('z'));

console.log("Index of o char ", greet.indexOf('o'));
console.log("last Index of o char ", greet.lastIndexOf('o'));


var replaceResult = greet.replace("Morning" , "Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper Case ", replaceResult.toUpperCase());
console.log("Lower Case ", replaceResult.toLowerCase());


var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length)




//Find the total extra spaces removed from the string - myName???

//solve above quetion


var myName = "   Mohit   Sharma  ";

console.log("includes()");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log("slice() method");
var sliceResult = greet.slice(5, 12);
console.log(sliceResult);
console.log(greet.slice(2, 5));

console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);

console.log(typeof splitResult);

var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);

var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";


var result = myFriendList.split(",");
console.log("Total number of freinds is :" , result.length);

var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";


var result = myFriendList.split(" ");
console.log("Total number of words is :" , result.length);



