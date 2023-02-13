let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * (999 - 100 + 1) + 100));
}
console.log(arr);

let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Minimum value: " + min);
console.log("Maximum value: " + max);