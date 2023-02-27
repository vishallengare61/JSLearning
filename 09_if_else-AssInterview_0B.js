


function interviewEligibility(gradScore, hscScore, sscScore, candidateName) {
    if (gradScore >= 70 || hscScore >=80 || sscScore>90) {
        console.log(`Congrats ${candidateName}, your eligible for interview drive`);
    }
    else{
        console.log(`Sorry  ${candidateName}, you are not eligible for interview drive`);
}
    }
    
interviewEligibility(80, 86, 90, "Vishal");
interviewEligibility(70, 65, 55, "Ashish");
interviewEligibility(60, 79, 88, "rahul");

