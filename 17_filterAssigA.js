
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const greterThan50 = arrayNumbers.filter(element=>{
    if (element>=50) {
        return element;
    }
});
console.log(`the numbers which is greater then 50 : ${greterThan50}`);

const evenNumber = arrayNumbers.filter((element)=>{
if (element%2==0) {
    return element;
}
});
console.log(`the even numbers from array is: ${evenNumber}`);


const oddNumber = arrayNumbers.filter((element)=>{
if (element%2!=0) {
    return element;
}
});
console.log(`the odd numbers from array is: ${oddNumber}`);


const multiplyBy5 = arrayNumbers.filter((element)=>{
if (element%5==0) {
    return element;
}
});
console.log(`the numbers which is multiply by 5 from array is: ${multiplyBy5}`);


const inBetween20_50 = arrayNumbers.filter((element)=>{
if (element>=20 && element<=50) {
    return element;
}
});
console.log(`the numbers which is in between 20-50 array is: ${inBetween20_50}`);