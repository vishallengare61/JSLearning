function doAssignment(callback){
    // Ajay 
    console.log("Solving assignments");
    console.log("Step 1 to 10 all ares solved now");
    callback();
}
function copyAssignment(){
    // Ajinkya
    console.log("Thank you Ajju, let me copy assignments!");
    console.log("Ohh finally coped all assignment");
}
doAssignment(copyAssignment);



function greet(){
    console.log("Good Morning.....");
}
setTimeout(greet, 4000);


function firstClass(){
    console.log("We can return function from another function");
    return function(){
        console.log("Inner function");
    }
    // return innerFunction;
}
const inner = firstClass();
inner();