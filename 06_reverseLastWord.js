console.log("------------reverse Last word only--------------");

function reverseLastWord(str) {
  var char = "";
  for (let index = str.length - 1; index >= 0; index--) {
    var reverse = str.charAt(index);
    char = char + reverse;
    if (reverse == " ") {
      break;
    }
  }
  return char;
}

var result = reverseLastWord("Vishal Birudev Lengare");
console.log(result);

console.log("------------reverse first word only--------------");

function reversefirstWord(str) {
  var char = " ";
  for (let index = 0; index < str.length - 1; index++) {
    var reverseFirst = str.charAt(index);
    char = char + reverseFirst;
    var reverse2 = "";

    for (let index = char.length - 1; index >= 0; index--) {
      var reverse = char.charAt(index);
      reverse2 = reverse2 + reverse;
    }
    if (reverseFirst == " ") {
      break;
    }
  }
  console.log("The given string is : ", str);
  console.log("Firstly find only first word :",char);

  return reverse2;
}
var result = reversefirstWord("Vishal Birudev Lengare");
console.log("Reverse the first word of the string: ",result);
