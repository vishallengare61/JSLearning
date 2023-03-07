

var str = "vishal lengare";
var reverse ="";
for (let index = str.length; index >=0; index--) {
    var charAt = str.charAt(index);
    reverse = reverse + charAt;
}
console.log(reverse);



console.log("--------------------------------------------------------");
//var char = "";
function reverseString(str){
    var char="";
    for (let index = str.length-1; index >=0; index--) {
        
        var reverse = str.charAt(index);
        char = char + reverse;
    }
    return char;
}
var result = reverseString("Vishal Birudev Lengare");
console.log(result);

console.log("--------------------------------------------------------");


        function reverseString2(str){
            var char = "";
            for (let index = str.length-1; index >=0; index--) {
                
                var result1 = str.charAt(index);
                char = char + result1;
            }
                return char;
        }
        var result = reverseString2("Vishal Lengare");
        console.log(result);



console.log("--------------------------------------------------------");

function reverseString3(str){
    
        var char = "";
    for (let index = str.length-1; index >=0; index--) {
        
      var reverse = str.charAt(index);
      char = char + reverse;
    }
        return char;
}
var result =  reverseString3("Vishal Birudev Lengare");

console.log(result);

console.log("--------------------------reverse last word in string------------------------------");

function reverseLastWord(str) {
    var char = "";
    for (let index = str.length-1; index >= 0; index--) {
    
        var reverseword = str.charAt(index);
        char = char + reverseword;
        if (reverseword==" ") {
            break;
        }
    }
    return char;
}

var result = reverseLastWord("Vishal Birudev Lengare");
console.log(result);

