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

//==================================