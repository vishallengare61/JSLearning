


function primeNumber(num){

    for (let index = 2; index < num; index++) {
        
        if (num % index === 0) {
            return `The number ${num} is not a prime number`;
        }
    }
    return `The number ${num} is a prime number`;

   

}
 var result = primeNumber(10);
console.log(result);