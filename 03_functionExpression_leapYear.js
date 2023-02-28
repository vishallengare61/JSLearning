
var check_leap_year = function leapYear(year) {
    if (isNaN(year) || year <= 0 || !Number.isInteger(year)) {
      console.log("Invalid input" ,year, ": Please enter a valid year.");
    } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) { //
      console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);

    }
  };

  check_leap_year(2020);
  check_leap_year(1999);
  check_leap_year(1600);
  check_leap_year(2022);
  check_leap_year(1945);
  check_leap_year(null);
  check_leap_year("Twenty Twenty");
  check_leap_year(undefined);
  check_leap_year(NaN);
  check_leap_year(1750);


  