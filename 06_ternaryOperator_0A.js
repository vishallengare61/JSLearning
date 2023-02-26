

console.log("-----------------------1 find the greater number among two numbers------------------------------");


function greaterNumber( num1 , num2){

     var result = num1 > num2 ? num1 : num2;
     console.log(`The greater number is : ${result}`);
}

greaterNumber(10 , -10);
greaterNumber(800 , 899);


console.log("----use of if-else statment----");

function greaterNumber2(num1 , num2) {
if (num1 > num2) {
    var result = num1 > num2;
    console.log(`The greater number is ${num1}`);
} else {
    console.log(`The greater number is ${num2}`);
       
}
}
greaterNumber2(10 ,-10);
greaterNumber2(800 ,899);



console.log("-----------------------2 find the even and odd number------------------------------");

function isEvenOrOddNum(num1){
   var result2 = num1 % 2 == 0 ? `The number ${num1} is even` : `the number ${num1} is odd.`;
   // console.log(num1 % 2 == 0 ? `The number ${num1} is even` : `The number ${num1} is odd` );
   return result2;
}

var fvalue = isEvenOrOddNum(10);
console.log(`2.1   ${fvalue}`);

var svalue = isEvenOrOddNum(44);
console.log(`2.2   ${svalue}`);

var tvalue = isEvenOrOddNum(0);
console.log(`2.3   ${tvalue}`);

var fovalue = isEvenOrOddNum(101);
console.log(`2.4   ${fovalue}`);

console.log("-----------------------3 check the length of string is even or odd------------------------------");

function wordLength(word) {
    var result = `${word.length % 2 == 0} ` ? `the length of the ${word} is  ${word.length} which is even` : `the length of the ${word} is ${word.length} which odd`;
    console.log(result);
}

wordLength("JavaScript");
wordLength("developer");
wordLength("Google");


