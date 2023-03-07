console.log("------------factorial using function---------------");
function factorialNumber(num) {
  var char = 1;
  for (let index = 1; index <= num; index++) {
    char = char * index;
  }

  return char;
}

var result = factorialNumber(5);
console.log(result);

console.log("------------factorial without function---------------");

var num1 = 10;
var num2 = 1;
for (let index = 1; index <= num1; index++) {
  num2 = num2 * index;
}
console.log(num2);



console.log("------------factorial using function expression---------------");

var value = function (num) {
  var num1 = 1;
  for (let index = 1; index <= num; index++) {
    num1 = num1 * index;
  }
  return num1;
};

var result = value(15);
console.log(result);
