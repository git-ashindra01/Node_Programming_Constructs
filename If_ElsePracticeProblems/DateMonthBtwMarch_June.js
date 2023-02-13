let day = process.argv[2];
let month = process.argv[3];

if (month === 'March' && day >= 20 || month === 'April' || month === 'May' ||
    (month === 'June' && day <= 20)) {
  console.log(true);
} else {
  console.log(false);
}