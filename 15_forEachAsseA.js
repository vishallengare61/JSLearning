const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];



console.log("-----------Elements with its index position----------------");
arrayNumbers.forEach(element => {
    console.log(`the element is ${element} ,and the index number is ${arrayNumbers.indexOf(element)}`);
});


console.log("-----------Elements with positive values----------------");

arrayNumbers.forEach(element => {
    if (element > 0) {
        console.log(`positive values from array :${element}`);
    }
});

console.log("-----------Elements with negative values----------------");

let newArray = [];
 arrayNumbers.forEach(element => {
    if (element < 0) {
       console.log(`the negative values: ${element}`);
    }
});

console.log("-----------even numbers from array----------------");


arrayNumbers.forEach(element => {
    if (element % 2 == 0) {
        console.log(`even number is ${element}`);
    }
});

console.log("-----------sum of all elements from array----------------");

let sum = 0;
arrayNumbers.forEach(element => {
    sum = sum + element;
});
console.log(`the sum of all elements is: ${sum}`);


console.log("-----------even indexed elements----------------");

arrayNumbers.forEach(element => {
    if (arrayNumbers.indexOf(element)%2==0) {
        console.log(`the even indexed elements: ${element}`);
    }
});
