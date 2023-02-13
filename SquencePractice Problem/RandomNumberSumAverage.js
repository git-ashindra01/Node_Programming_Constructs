let sum = 0;
for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 100);
    sum += number;
    console.log("Number " + (i + 1) + ": " + number);
}

let average = sum / 5;
console.log("Sum: " + sum);
console.log("Average: " + average);