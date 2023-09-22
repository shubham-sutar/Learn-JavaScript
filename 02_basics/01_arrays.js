//arrays

const myArr = [0, 1, 2, 3, 4, 5, 'shubh'];
const myHeros = ["shubham","sayali","nita"];

const myArr2 = new Array(12, 13, 15, 34);
console.log(myArr2[1]);
console.log(typeof myArr2);

//methods
console.log(myArr2.length);

myArr2.push('shubh'); //adding value in last index
myArr2.push('sayali');
myArr2.push('rumani');

//myArr2.pop(); //delete last index value

myArr2.unshift(23); //adding value in first index
myArr2.shift(); //delete value of first index
console.log(myArr2.indexOf(34));
 console.log(myArr2.includes(50)); //false

 const numArr = new Array(23, 34, 56, 0);
 const allArr = numArr.join(myArr);

 console.log(allArr);
 console.log(typeof allArr);

 // slice and splice

 const charArr = new Array('a','b','c','d');

 
 console.log(charArr.slice(0,3)); //['a', 'b', 'c']
 console.log(charArr); //['a', 'b', 'c', 'd']

 console.log(charArr.splice(0,3)); //['a', 'b', 'c']
 console.log(charArr); //['d']

