

function monthOfYear(monthNumber) {
    
    switch (monthNumber) {
        case 1:
            console.log(`the ${monthNumber} number month is jan`);
            break;
        case 2:
            console.log(`the ${monthNumber} number month is Feb`);
            break;
        case 3:
            console.log(`the ${monthNumber} number month is March`);
            break;
        case 4:
            console.log(`the ${monthNumber} number month is April`);
            break;
        case 5:
            console.log(`the ${monthNumber} number month is May`);
            break;
        case 6:
            console.log(`the ${monthNumber} number month is jun`);
            break;
        case 7:
            console.log(`the ${monthNumber} number month is july`);
            break;
        case 8:
            console.log(`the ${monthNumber} number month is August`);
            break;
        case 9:
            console.log(`the ${monthNumber} number month is septeber`);
            break;
        case 10:
            console.log(`the ${monthNumber} number month is october`);
            break;
        case 11:
            console.log(`the ${monthNumber} number month is november`);
            break;
        case 12:
            console.log(`the ${monthNumber} number month is December`);
            break;
            
    
        default:
            console.log(`${monthNumber} is invalid month number`);
            break;
    }
}

monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);

