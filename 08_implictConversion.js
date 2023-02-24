console.log("-------------------------Implicit Conversion to string--------------------------------");


var result;
result = '3' + 2;
console.log(result);

// In JavaScript, the + operator is used both for addition and string concatenation. When one of the operands is a string, 
//JavaScript will try to convert the other operand to a string and concatenate them together.

// In this code snippet, the string '3' is concatenated with the number 2. Since '3' is a string, JavaScript will treat 2 as a string as well,
// and concatenate it to '3', resulting in the string '32'.

// Therefore, when console.log(result) is executed, it will output the string '32'.



result = '3' + true;
console.log(result);
// In JavaScript, when a string is concatenated with a boolean value, the boolean value will be coerced (forcefully) to a string. 
// The true boolean value is converted to the string 'true'.

// Therefore, in the expression '3' + true, the string '3' is concatenated with the string 'true', resulting in the string '3true'.

// When console.log(result) is executed, it will output the string '3true'

result = '3' + undefined;
console.log(result);

// In JavaScript, when a string is concatenated with an undefined value, the undefined value will be coerced (forcefully) to the string "undefined".

// Therefore, in the expression '3' + undefined, the string '3' is concatenated with the string "undefined", resulting in the string '3undefined'.

// When console.log(result) is executed, it will output the string '3undefined'

result = '3' + null;
console.log(result);


console.log("-------------------------Implicit Conversion to Number--------------------------------");

console.log("If boolean is used , true=1 & false=0");

var result;
result = '4' - true;
console.log(result);
// In JavaScript, when the - operator is used with a string and a boolean, JavaScript will attempt to convert both operands to numbers 
// and subtract the second operand from the first.

// In this case, the string '4' is converted to the number 4, and the boolean true is converted to the number 1.
//  So the expression '4' - true is equivalent to 4 - 1, which equals 3.

// Therefore, when console.log(result) is executed, it will output the number 3.

result = 4 + true;
console.log(result);


result = 4 - false;
console.log(result);

console.log("-------------------------Implicit String Conversion to Number--------------------------------");

var result;

result = '4' - 2;
console.log(result);

// In JavaScript, when the - operator is used with two strings, JavaScript will attempt to convert both operands to numbers and subtract 
// the second operand from the first.

// In this case, the string '4' is converted to the number 4, and the number 2 is already a number.
//  So the expression '4' - 2 is equivalent to 4 - 2, which equals 2.

// Therefore, when console.log(result) is executed, it will output the number 2.


result = '4' - '2';
console.log(result);


result = '4' * '2';
console.log(result);


result = '4' / '2';
console.log(result);
console.log("-------------------------Undefined used with number, boolean or null given NaN--------------------------------");


var result;

result = 4 + undefined;
console.log(result);
console.log("---------------------");


// In JavaScript, when a number is added to an undefined value, the result will be NaN (Not a Number).

// Therefore, in the expression 4 + undefined, the undefined value is coerced to NaN, and the result of the addition is also NaN.

// When console.log(result) is executed, it will output NaN.


result = true + undefined;
console.log(result);
console.log("---------------------");

// In JavaScript, when a boolean value is added to an undefined value, the result will be NaN (Not a Number).

// Therefore, in the expression true + undefined, the true value is coerced to the number 1, and the undefined value is coerced to NaN. The addition of 1 and NaN results in NaN.

// When console.log(result) is executed, it will output NaN.

result = null + undefined;
console.log(result);

