const fname = "shubham";
const repoCount = 50;

//console.log(fname +" "+ repoCount + " " + "value");
console.log(`my name is ${fname} and my repos Count is ${repoCount}`);

const fullName = new String("Shubham Sutar");
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.__proto__);
console.log(fullName.charAt(8));
console.log(fullName.indexOf('m'));

const newString = fullName.substring(2,8);
console.log(newString);

const anotherString = fullName.slice(-12,-9);
console.log(anotherString);

let myString = "  Lets Practice  ";
let myString1 = myString.trim();
console.log(myString1);

let url = "https://joshmarathi.com/new%20artical";
let newUrl = url.replace('%20','-');
console.log(newUrl);
console.log(url.replace('%20','-'));
console.log(url.includes('joshmarathi')); //true
console.log(url.includes('assets')); //false

let lorem = "Welcome To The JavaScript World.";
console.log(lorem.split(' '));
