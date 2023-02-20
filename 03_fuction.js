
// Function with no arguments and no return value

function showFullName(){
console.log("my full name is : Vishal Lengare",);
}

showFullName();

// Function with arguments and no return value

function showAge(age){
    console.log("my age is: ",age);
}

showAge(22);

// Function with  no arguments and with return value

function fullName(){
    var name = "Vishal Lengare";
    return name;
}

var fName = fullName();
console.log(fName);

// Function with  with arguments and with return value

function sumOfNumbers(num1 , num2 , num3){
    var result = num1 + num2 + num3;
    return result;
}
var sum = sumOfNumbers(10 , 45 , 79);
console.log(sum);

var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1= "Vishal";
var name2 = "Amol";


function swapVariables(value1 ,  value2){
    console.log("Before Swap: ", value1 , value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1 , value2);
    return "swapping variables successfully complted";
}

var swapResult = swapVariables(num1, num2); // Function call or Function invoke
  console.log(swapResult);
  
  var swapResult2 =  swapVariables(str1, str2);