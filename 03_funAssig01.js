
console.log("------------------------first task--------------------------");

function msg(){
    var msg1 = ("I love to learn java script");
    var msg2 = ("So I have joined the CodeMind Technology..!");
    console.log(msg1);
    console.log(msg2);
}

msg();

console.log("------------------------second task--------------------------");


function personalDetails(firstName , lastName , collageName){
    console.log(firstName);
    console.log(lastName);
    console.log(collageName);
    }

    personalDetails("Vishal" , "Lengare" , "Vidnyan Mahavidyalaya, Sangola");


    console.log("------------------------third task--------------------------");


    function swapValuesDude( num1 , num2){

        console.log("Values before swaping:- ", num1 , num2);

        var temp = num1;
        num1 = num2;
        num2 = temp;
        console.log("Values after swaping:- ", num1 , num2);
    }         

    swapValuesDude(500 , 1000);
    console.log("------------------------------------------------------------");

    swapValuesDude("virat" , "Anushka");
    console.log("------------------------------------------------------------");

    swapValuesDude("1000" , "2000");

    console.log("------------------------forth task--------------------------");

function addThreeValues(num1 , num2 , num3){

    var result = num1 + num2 + num3;
    console.log("The addition of three arguments is :", result);
}

addThreeValues(10.23 , 600 , 40);
console.log("------------------------------------------------------------");
addThreeValues("Hello" , "Good" , "Morning");

console.log("--------------------------Thank you----------------------------------");

