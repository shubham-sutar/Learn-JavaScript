const score = 1200;
console.log(score);

const balance = new Number(35.8455);
console.log(balance);

console.log(balance.toFixed(2)); // 35.85
console.log(balance.toFixed(3)); // 35.846

console.log(balance.toPrecision(4)); //35.85
console.log(balance.toPrecision(3)); //35.8
console.log(balance.toPrecision(2)); //36

const numOne = new Number(10000000);
console.log(numOne.toLocaleString()); // 10,000,000

let num1 = 234;
let num2 = 23452;
let num3 = 8;
console.log(Math.max(num1,num2,num3));

const myArray = [450, 620, 780, 0];
console.log(Math.max(...myArray)); //780
console.log(Math.min(...myArray)); // 0

console.log(Math.abs(-439)); // 439
console.log(Math.round(18.68)); //19
console.log(Math.floor(12.98)); //12
console.log(Math.ceil(12.34)); // 13

console.log(Math.floor(Math.random()*10)); // 0 to 9
console.log(Math.floor(Math.random()*10)+1); // 1 to 10





