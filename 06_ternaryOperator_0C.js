function studentInterview(gradScore, hscScore, sscScore, candidateName) {
  var result =
    gradScore >= 70 || hscScore >= 80 || sscScore > 90
      ? `Congrats ${candidateName} you are eligible for TCS interview`
      : `sorry ${candidateName} unfortunately you are not eligible for TCS interview`;

      console.log(result);
}

studentInterview(70, 86, 90, "Vishal");
studentInterview(80, 65, 55, "Ashish");
studentInterview(60, 79, 88, "Akash");



console.log("-----------------------ternary to if-else statment--------------------------");

function studentInterview2(gradScore, hscScore, sscScore, candidateName) {

  if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
    console.log(`${candidateName} you are eligible for interview`);
  } else{
    console.log(`${candidateName} you are not eligible for interview`);
    
  }

}

studentInterview2(70, 86, 90, "Vishal");
studentInterview2(80, 65, 55, "Ashish");
studentInterview2(60, 79, 88, "Akash");
