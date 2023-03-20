
let arr = () =>{
    console.log("Good Morning, Today is monday");
}

console.log("----------function with no args and no return value.------------");
arr();

console.log("----------function with three args (5,5,2) and no return value.----------");

let multiplication  = (num1, num2, num3=1)=>{

    console.log("The multiplication of three args is: " , num1*num2*num3);
}

multiplication(5,5,2);
console.log("----------function with three args (10,4,1) and no return value.----------");

multiplication(10, 4);

let addition = (num1, num2, num3, num4, num5)=>{

    return num1+num2+num3+num4+num5;
};

console.log("----------function with five args (100, 100, 200, 349, 756) and return value.----------");
let result = addition(100, 100, 200, 349, 756);
console.log("the addition of five numbers is",result);


let result2  = addition("i am", " Learning", " ES6", " features", " in depth");
console.log(result2);