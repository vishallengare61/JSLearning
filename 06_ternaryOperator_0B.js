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

