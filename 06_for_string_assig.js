




var totalNumberOfVowels = function(str){
        var count = "";
        for (let index = 0; index <=str.length-1; index++) {
            var char = str.charAt(index);
            if (char=="a" || char=="e" || char=="i" || char=="o" ||char=="u" || char=="A" || char=="E" || char=="I" || char=="O" ||char=="U") {
                count = count + 1;
           }
        
        }
        return count.length;
        
}

var result = totalNumberOfVowels("JavaScript is the language of internet");
console.log( `The number of vowels present in the string "JavaScript is the language of internet" is : ${result}`);
var result = totalNumberOfVowels("I an Angular Developer");
console.log( `The number of vowels present in the string "I an Angular Developer" is : ${result}`);
var result = totalNumberOfVowels("Hard Work and Commitment is the key of success");
console.log( `The number of vowels present in the string "Hard Work and Commitment is the key of success" is : ${result}`);



console.log(`----------------------------------------------------------------------------------------------------------------------`);

function lastWordCharsCounts(str){
    var count="";
    for (let index = str.length-1; index >= 0; index--) {
        var char = str.charAt(index);
        if (char==" ") {
            break;
        }
          count=count+char;        
    }
    return count.length;
}

var result = lastWordCharsCounts("JavaScript is the language of internet");
console.log(`the string is "JavaScript is the language of internet" and the length of last word is ${result}`);

var result = lastWordCharsCounts("I an Angular Developer");
console.log(`the string is "I an Angular Developer" and the length of last word is ${result}`);

var result = lastWordCharsCounts("Hard Work and Commitment is the key of success");
console.log(`the string is "Hard Work and Commitment is the key of success" and the length of last word is ${result}`);