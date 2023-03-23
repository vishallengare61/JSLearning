

const arrayNumber = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];


let newArray = [];
arrayNumber.forEach(element => {
    newArray.push(element+10);
});
console.log("Add the value 10 in each element");
console.log(newArray);

let squareArray = [];
arrayNumber.forEach(element => {
    squareArray.push(element ** 2 );
});
console.log("Square of each element");
console.log(squareArray);


let indexValue = [];
arrayNumber.forEach(element => {
  indexValue.push(arrayNumber.indexOf(element) + element)
});
console.log("Add the index value in element");
console.log(indexValue);