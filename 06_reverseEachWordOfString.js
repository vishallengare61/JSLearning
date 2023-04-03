let string = "Vishal Lengare";
let reversedString = "";

for (let i = 0; i < string.length; i++) {
  let word = "";
  for (let j = i; j < string.length && string[j] !== " "; j++) {
    word = string[j] + word;
    i = j;
  }
  reversedString += word + " ";
}

console.log(reversedString);
