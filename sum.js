// MOCK INTERVIEW QUESTION OF JAVASCRIPT ON CODING TASK.


//FIRST TASK.
//find the sum of the array element
const array = [ 23, 56, 78, 9, 23 ]

let sum = 0;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + element;
    }
console.log(sum);   //189



//CREATE THE SHALLOW COPY OF GIVEN OBJECT.


class ranjit{
    constructor(name, roll, sub){
        this.name = name;
        this.roll = roll;
        this.sub = sub;
    }
}

let obj = new ranjit('ranjit', 11, 'science');

let copiedObject = obj

console.log(obj);
console.log(copiedObject);

//SHALLOW COPY...     //CHANGES WILL HAPPEN BOTHE OBJECTS.
copiedObject.age = 23;
console.log(obj);
console.log(copiedObject);


//DEEP COPY---> IN SHALLOW COPY TWO TYPES->(SPREAD OPERATOR AND JSON.PARES() or json.stringyfy() ).


//using spread operator--->
console.log("------------using spread operator-----------");
let shallowCopy = {...obj}
console.log(obj);
console.log(shallowCopy);

console.log("------------change the value-----------");//ORIGINAL VALUE IN ARRAY  WILL NOT BE CHANGED
shallowCopy.collage = "VMS";
console.log(obj);
console.log(shallowCopy);


console.log("------------BY USING JSON.PARSE()------------");
//wrong
// let jsonCopy = JSON.parse();

// console.log(jsonCopy);







console.log("------------BY USING JSON.STRINGIYFY()------------");


let stringyfyObject = JSON.stringify(obj);
stringyfyObject.tal = "Sangola";  //changes will not accept
console.log(stringyfyObject);






//CHECK HOW MANY WORDS ARE IN THE GIVEN STRING

const js = "The language of internet";

let splitString = js.split(" ");
let count = splitString.length;
console.log(count);


//FIND THE FIBONACII SERIES TILL NUMBER EIGHT.
console.log("----------------fibonacii----------------");
let num1 = 0;
let num2 = 1;
let nextNum;

for (let index = 2; index <= 10; index++) {
    nextNum = num1 + num2;
    console.log(nextNum);
    num1 = num2;
    num2 = nextNum;
}




//SECOND TIME PRACTICE OF FIBONACII SERIES
console.log("-----------------SECOND TIME PRACTICE FOR FIBONACII SERIES------------");

let n1 = 0;
let n2 = 1;
let nextValue ;

for (let index = 2; index <=7; index++) {
    nextValue =  n1 + n2;
    console.log(nextValue);
    n1 = n2;
    n2 = nextValue;
}


//SORT THE GIVEN ARRAY BY ASSENDING ORDER--->


console.log("------sort the give array by assending order--------");
const arraySort = [23, 56, 78, 9, 23, 2, 23, 78];

arraySort.sort( (a, b)=>{
if (a>b) {
    return 1;
}else{
    return -1;
}
} );
console.log(arraySort);


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

// const array = [23, 56, 78, 9, 23, 2, 23, 78];
// array.sort( (a, b) => { 
//     return a>b ? 1 : -1;
// } );
// console.log(array);
