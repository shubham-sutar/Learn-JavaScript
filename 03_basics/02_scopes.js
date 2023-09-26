let num1 = 12;
const num2 = 24;
var num3 = 36;

console.log(num1);
console.log(num2);
console.log(num3);

//=================================
let numOut = 45; // globle scope

if(true){
    let num4 = 40; // block scope
    const num5 = 45; //block scope
    var num6 = 50;
}

console.log(numOut);

//console.log(num4); // error log outside block
//console.log(num5); // error log outside block
console.log(num6); // 50 accessible every where

//=================================