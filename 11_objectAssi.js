

const sbiBank = {
    bankName: "SBI",
    location: "Pune",
    accountNumber: 565677,
    IFSC: "SBI0000266",
    interestRate: 10
};
const axisBank = {
    bankName: "AXIS",
    location: "mumbai",
    accountNumber: 56567787,
    IFSC: "AXIS0000296",
    interestRate: 5
};
const hdfcBank = {
    bankName: "HDFC",
    location: "delhi",
    accountNumber: 567465677,
    IFSC: "HDFC0000266",
    interestRate: 3
};
const yesBank = {
    bankName: "YESBANK",
    location: "Pune",
    accountNumber: 32321565677,
    IFSC: "YES0000676",
    interestRate: 7
};

let showDetails =  function invoke(){

    // for (const key in sbiBank) {
    //     if (Object.hasOwnProperty.call(sbiBank, key)) {
    //         const element = sbiBank[key];
    //         var result = `${key}: ${element}`
    //         console.log(result);
    //     }
    // }
    console.log("--------------SBI--------------------");
    console.log(sbiBank);
    console.log("--------------AXIS--------------------");
    console.log(axisBank);
    console.log("--------------HDFC--------------------");
    console.log(hdfcBank);
    console.log("--------------YES--------------------");
    console.log(yesBank);
}


showDetails()