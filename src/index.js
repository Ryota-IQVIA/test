console.log("スプレット構文");
const arr = [1,2];
console.log(arr);
console.log(...arr);

const sumF = (num1,num2) => console.log(num1+num2);
sumF(...arr);


