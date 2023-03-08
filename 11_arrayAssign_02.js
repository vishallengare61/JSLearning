const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log("The given array is: ",arrayNumbers);
console.log("---------------------1 find the length of array------------------------------");

console.log(`The length of array is: `,arrayNumbers.length);

console.log("---------------------2 log first and last element from array------------------------------");

console.log("The first element of array is: ", arrayNumbers[0],"And the last element of array is: ", arrayNumbers[arrayNumbers.length-1]);

console.log("---------------------3 log last third element from array------------------------------");


console.log("The last third number element is: ", arrayNumbers[arrayNumbers.length-3]);

console.log("---------------------4 find the even numbers from array------------------------------");


const evenNumbers = [];

for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 2 === 0) {
    evenNumbers[evenNumbers.length] = arrayNumbers[i];
  }
}

console.log(evenNumbers);

console.log("---------------------5 find the odd numbers from array------------------------------");

const oddNumbers = [];

for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 2 != 0) {
    oddNumbers[oddNumbers.length] = arrayNumbers[i];
  }
}

console.log(oddNumbers);

console.log("---------------------6 find the even numbers from array and sum it------------------------------");

var sum= 0;
for (let index = 0; index < evenNumbers.length; index++) {
    var element =evenNumbers[index];
    var sum = sum + element;    
}
console.log(`The sum of even numbers in array is: `,sum);

console.log("---------------------7 find the odd numbers from array and sum it------------------------------");
var sum= 0;
for (let index = 0; index < oddNumbers.length; index++) {
    var element =oddNumbers[index];
    var sum = sum + element;    
}
console.log(`The sum of odd numbers in array is: `,sum);

console.log("---------------------8 find the sum of all numbers from array ------------------------------");
var sum= 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    var element =arrayNumbers[index];
    var sum = sum + element;    
}
console.log(`The sum of all numbers in array is: `,sum);

console.log("---------------------9 find the numbers which are multiple by 5 ------------------------------");

const mutipleBy5 = [];

for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 5 === 0) {
    mutipleBy5[mutipleBy5.length] = arrayNumbers[i];
  }
}

console.log(`The numbers which are multiple by 5 are: `,mutipleBy5);

console.log("---------------------10 find the numbers 115 is available in array ------------------------------");

console.log(`The number 115 is available in array? `,arrayNumbers.includes(115));

console.log("---------------------11 find the numbers 23 is available in array ------------------------------");
console.log(`The number 23 is available in array? `,arrayNumbers.includes(23));

console.log("---------------------12 insert numbers 55, 66 before index 3 ------------------------------");

arrayNumbers.splice(3 , 0 , 55 , 66);
console.log(`after adding the 55, 66 the new array is: `,arrayNumbers);

console.log("---------------------13 delete 3 elements starting from index 4 ------------------------------");

arrayNumbers.splice(4, 3);
console.log(`after deleting the 3 elements from index 4 new array is: `,arrayNumbers);

