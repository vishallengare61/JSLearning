
class Bank {


    constructor (){

        const sbiBank = {
            bankName: "SBI",
            location: "Pune",
            kankCode: 565677,
            IFSC: "SBI0000266",
            interestRate: 10
        };
        const axisBank = {
            bankName: "AXIS",
            location: "mumbai",
            kankCode: 56567787,
            IFSC: "AXIS0000296",
            interestRate: 5
        };
        const mhaBank = {
            bankName: "MHA",
            location: "delhi",
            kankCode: 567465677,
            IFSC: "HDFC0000266",
            interestRate: 3
        };
  console.log(sbiBank.bankName);
       
    }

    
}
// for (const key in sbiBank) {
//     if (Object.hasOwnProperty.call(sbiBank, key)) {
//         const element = sbiBank[key];
//         console.log(key, element);
        
//     }
// }