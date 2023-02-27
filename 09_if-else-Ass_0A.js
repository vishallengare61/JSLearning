
function voteEligiility(age){

    if (age<0 || age==undefined || age==null || age==0 || age>100) {
        console.log(`Invalid age ${age}, plz provide a valid age`);
    }
    else{
        
    if (age>18) {
        console.log(`Congratualations your age is ${age} and  you are eligible for voting`);
    }
    else{
        console.log(`your age is ${age} you are not eligible for voting`);
    }
   
    }


}

voteEligiility(45);

voteEligiility(17);

voteEligiility(8);

voteEligiility(20);

voteEligiility(-10);

voteEligiility(200);

voteEligiility(0);

voteEligiility(undefined);

voteEligiility(null);


console.log(`------------------------------------------Grade System --------------------------------------`);


function gradeCalculation(marks){

    if(marks>=90 && marks<=100){
        console.log(`Funtastic marks : ${marks}, your grade is A+.`);
    }
    else if(marks>=75 && marks <89){
        console.log(`Excellent marks : ${marks}, your grade is A.`);

    }
    else if(marks>=50 && marks <74){
        console.log(`Good marks : ${marks}, your grade is B.`);
    }
    else if(marks>=35 && marks <=49){
        console.log(`marks is : ${marks}, your grade is C, Need to improvment.`);

    }
    else if(marks>=1 && marks <34){
        console.log(` marks : ${marks}, your grade is fail.`);

    }
    else if(marks<=0 || marks >= 101 || marks==null || marks==undefined || marks==NaN || (marks != typeof number) || (marks== typeof String)){
        console.log(`Invalid marks : ${marks}, please provide a valid number.`);

    }
}

gradeCalculation(90);
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);

