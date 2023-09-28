//if
// comparison oprt. 
// <, >, <=, >=, ==, ===,!=


if(3 == 3){
    console.log("true");
}
else{
    console.log("false");
} // true bcoz it check only value

if(3 === '3'){
    console.log("true");
}
else{
    console.log("false");
} // false bcoz it checks both value and type.

//==================================

const score = 200;

if(score > 100){
    const power = "fly";
    console.log(`User power = ${power}`);
}

// console.log(`User power = ${power}`); //error bcz out of scope.

const num = 100;
num > 50 ? console.log("true"): console.log("false"); //ternari operator.

//==================================

const run = 250;

if(run>300){
    console.log(`my run less than 300`);
}
else if(run>200){
    console.log(`my runs greater than 200`);
}
else if(run == 250){
    console.log(`my runs is 250`);
}

//==================================

// Nullish Coalescing Operator (??) : null undefined

let val1;
//val1 = 5 ?? 10; //op = 5
//val1 = null ?? 10; //op = 10
//val1 = undefined ?? 10; // 15
val1 = null ?? 10 ?? 20; // 10

console.log(val1);