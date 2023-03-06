
const arraySessionalFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(arraySessionalFruits);

console.log("---------------------first task---------------------------------");

let firstindex = arraySessionalFruits[0];
console.log(`The first element in given array is- `, firstindex);
let lastIndex = arraySessionalFruits[arraySessionalFruits.length-1];
console.log(`The last element in given array is-  `, lastIndex);

console.log("-----------second task (Adding the papaya at first)-----------------------");

arraySessionalFruits.unshift("Papaya");
console.log(arraySessionalFruits);

console.log("-----------third task (remove mango)-----------------------");

let removeElement = arraySessionalFruits.splice(4,1);
console.log(`Removed mango from the array- `,arraySessionalFruits);

console.log("-----------forth task (add pineapple at last)-----------------------");


arraySessionalFruits.push("Pineapple");
console.log(`Add the pineapple at the last- `, arraySessionalFruits);

console.log("-----------fifth task (insert dragon fruit before water melon)-----------------------");

arraySessionalFruits.splice(4,0,"dragon fruit");
console.log(`insert the dragon fruit before water melon`, arraySessionalFruits);

console.log("-----------sixth task (replace orange with kiwi)-----------------------"); 
arraySessionalFruits.splice(2, 1, "kiwi");
console.log(`replace orange with kiwi`, arraySessionalFruits);

console.log("-----------seventh task (log elements starting from 1-4)-----------------------"); 

const subarray = arraySessionalFruits.slice(1, 4);
console.log(subarray);

console.log("-----------eights task (log last three elements)-----------------------"); 


const subarray2 = arraySessionalFruits.slice(arraySessionalFruits.length-3, arraySessionalFruits.length)

 console.log(subarray2);