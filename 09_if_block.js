
console.log(`start`);

var num = 10;
if (num>0) {
    console.log(`num ${num} is positive`);
    
}
console.log(`end`);

var ageForVote = 10;
if (ageForVote >= 18) {
    console.log(`you are eligible for voting`);
    console.log(`Age is : ${ageForVote}`);
}

console.log(`End of the next if block`);

function checkEvenOdd(num){

    if (num%2==0) {
        return "EVEN";
    }
    if (num%2!=0) {
        return "ODD";
    }
}

var result = checkEvenOdd(45);
console.log(`Given number 45 is ${result}`);
var result = checkEvenOdd(70);
console.log(`Given number 70 is ${result}`);

var num1 = 5;
if ( num1>0) {
    console.log(`Number ${num1} is positive`);
} else {
    console.log(`Number ${num1} is Negative`);
    
}

function maleMarriageEligiblity(gender, age , boyName){
    if (gender=="Male" && age>=21) {
        console.log("Eligible for vote");
    } else {
        console.log("Not eligible for vote");
    }
}
maleMarriageEligiblity("Male" , 25 , "Billgates");
maleMarriageEligiblity("Male" , 20 , "mark Zukarburg");
