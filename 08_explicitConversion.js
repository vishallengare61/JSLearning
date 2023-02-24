console.log("--------Explicit conversion: Convert number strings and boolean values to numbers,In that case we can use Number();----------");


var result;

result = Number('324');
console.log(result);


// the Number() function is used to convert the string '324' to a number and assign that value to the result variable.

// The Number() function in JavaScript is used to convert a value to a number. If the argument passed to the function 
// is a string containing a valid number, it will return the numeric representation of that string. In this case, 
// the string '324' is a valid number, so the Number() function will convert it to the number 324.

// When console.log(result) is executed, it will output 324, as that is the value of the result 
// variable after it has been assigned the value of Number('324').






var result;

result = Number('324e-1');
console.log(result); 
// In this code snippet, a variable called result is declared using the var keyword, but is not assigned a value. 
// Then, the Number() function is used to convert the string '324e-1' to a number and assign that value to the result variable.

// The Number() function in JavaScript is used to convert a value to a number. If the argument passed to the function is
//  a string containing a valid number, it will return the numeric representation of that string. In this case,
//  the string '324e-1' is a valid number, representing the scientific notation for the number 32.4.

// When console.log(result) is executed, it will output 32.4, as that is the value of the result variable after it has been
//  assigned the value of Number('324e-1'). The e-1 in the string '324e-1' indicates that the decimal point should be shifted
//   one place to the left, resulting in the value 32.4.

result = Number(true);
console.log(result); 

result = Number(false);
console.log(result); 


console.log("-----------Explicit conversion: Invalid string to number return NaN--------------"); 
var result;
result = Number("vishal");
console.log(result); 

result = Number(undefined);
console.log(result); 
console.log("------------------------"); 


result = Number(null);
console.log("------------------------"); 

result = Number(NaN);
console.log(result); 
console.log("------------------------"); 


console.log("-----------Explicit conversion: string to number using + operator------------"); 



var numberInString = "100";
console.log(typeof numberInString);
var myNumber = + numberInString;
console.log(typeof myNumber);

console.log("-----------Explicit conversion: number to string data type conversion using toString() method------------"); 

var myNumber = 100;
console.log(typeof myNumber);

var afterConversion = myNumber.toString();
console.log(typeof afterConversion);


