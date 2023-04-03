// const array = [ 23, 56, 78, 9, 23 ]
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }

// console.log(sum); 


// class ranjit {
//     constructor(name, roll, subject) {
//       this.name = name;
//       this.roll = roll;
//       this.subject = subject;
//     }
//   }
  
//   let obj = new ranjit('ranjit', 11, 'science');
  
//   let clonedObj = { ...obj };
  
//   console.log(clonedObj); // Output: Student { name: 'ranjit', grade: 11, subject: 'science' }
  

//   const js = "The language of internet";
// const splitWords = js.split(' ');
// const wordCount = splitWords.length;
// console.log(wordCount);

// let num1 = 0;
// let num2 = 1;
// let nextNum;

// for (let i = 2; i <= 7; i++) {
//   nextNum = num1 + num2;
//   console.log(nextNum); 
//   num1 = num2;
//   num2 = nextNum;
// }
// 1,2,3,4,5,6,7,8

// const array = [23, 56, 78, 9, 23, 2, 23, 78];

// array.sort(function(a, b) {
//   return a - b;
// });

// console.log(array);

const array = [23, 56, 78, 9, 23, 2, 23, 78];
array.sort( (a, b) => { 
    return a>b ? 1 : -1;
} );
console.log(array);
