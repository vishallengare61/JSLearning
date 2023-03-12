
// //a number that can be divided exactly only by itself and 1, for example 7, 17 and 41 1.

// function primeNumber(num){

//     if(num<2){
//         console.log("plz enter number greater then two");
//     }

//     for (let index = 2; index < num; index++) {   //index start from zero because number 0 module number will give answer zero.(check ans again)
        
//         if (num % index === 0) {
//             return `The number ${num} is not a prime number`;
//         }
//     }
//     return `The number ${num} is a prime number`;
// }
//  var result = primeNumber(10);
// console.log(result);


console.log("-----------------------------------------------------------------");
function primePractice(num){
      let char = true; //variabale is IMP
    for (let index = 2; index <=num-1; index++) {
        
        if (num % index === 0) {
            char = false;
            break;    
        }              
    } 
    if (char === false) {
        console.log(`The number ${num} is not a prime`);
    }else{
       console.log(`The number ${num} is a prime`);      
    }
    }

primePractice(5);
console.log("-----------------------------------------------------------------");
primePractice(3);
console.log("-----------------------------------------------------------------");
primePractice(50);
console.log("-----------------------------------------------------------------");
primePractice(117);
console.log("-----------------------------------------------------------------");
primePractice(57);
console.log("-----------------------------------------------------------------");
primePractice(876);
console.log("-----------------------------------------------------------------");
primePractice(45);
console.log("-----------------------------------------------------------------");
primePractice(47);
console.log("-----------------------------------------------------------------");
primePractice(93);


console.log("-----------------------------------------------------------------");

let num = 7;

if (num % 2 === 0) {
    
} else {
    
}




// console.log("-----------------------------------------------------------------");

// function primePractice(num) {
//     let isPrime = true;
//     for (let i = 2;i <= num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime && num > 1) {
//         console.log(`The number ${num} is a prime`);
//     } else {
//         console.log(`The number ${num} is not a prime`);
//     }
// }

// primePractice(40);
