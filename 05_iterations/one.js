//for


const num = [12,45,67,43];
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    console.log(element);
}

for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log( i + "x" + j + "=" + i * j );
    }
    console.log("\n");
}

for (let i = 0; i <= 20; i++){
    if(i == 10){
        console.log(`Detected 10`);
        continue;
    }
    if (i == 18) {
        console.log(`Detected 18`);
        break;
    }
    console.log(`value of i is ${i}`);
}

//while loop

let i = 1;
let myNum = 10;

while(i<=myNum){
    console.log(i);
    i++;
}

//do while loop

i = 1;
myNum = 10;

do{
    console.log(`${i}`);
    i++;
} while(i<=myNum);

//print array element
//for of

const numArr = [12, 23, 34, 45, 56];

for (const num of numArr) {
    console.log(num);
}

const greetings = "hello shubham";
for (const greet of greetings) {
    console.log(greet);
}

//Maps : it gives only unique value.

const map = new Map();
map.set('IN',"India")
map.set('US',"united states")
map.set('Fr',"France")
map.set('IN',"India")// not render

console.log(map);