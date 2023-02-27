console.log("--------------------step 1-------------------------------");
function maleMarriageEligibility(gender, age, boyName) {
  var result =
  (gender=="Male" && age>=21)
      ? `Hey ${boyName} you are eligible for Marrige`
      : `Hey ${boyName} you are not eligible for Marrige`;

  console.log(result);
}

maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "stev jobs");

console.log("--------------------step 2-------------------------------");

function femaleMarriageEligibility(gender, age, boyName) {
    var result2 =
    (gender=="female" && age>=21)
        ? `Hey ${boyName} you are eligible for Marrige`
        : `Hey ${boyName} you are not eligible for Marrige`;
  
    console.log(result2);
  }
  
  femaleMarriageEligibility("female", 16, "Jenifer");
  femaleMarriageEligibility("female", 27, "Malindi Gates");




  console.log("===------------------------Adding if - else statment---------------");



  function maleMarriageEligibility2(gender, age, boyName){

    if (gender=="Male" && age>=21) {
     console.log(` Hey ${boyName} you are eligible for Marrige`);
    }
    console.log( `Hey ${boyName} you are not eligible for Marrige`);
  }

  maleMarriageEligibility2("Male", 25, "Billgates");
maleMarriageEligibility2("Male", 17, "stev jobs");
