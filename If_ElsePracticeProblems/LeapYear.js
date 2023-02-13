let year = process.argv[2];

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}