
// Truthy value
const userName = "Shubham.Ai";

if(userName){
    console.log("LoggedIn"); // truthy
} else{
    console.log("Enter userName");
}

// Falsy value
const user = "";

if(user){
    console.log("LoggedIn");
} else{
    console.log("Enter userName");
}

// falsy value :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value :
// " ", "0", 'false', [], {}, function(){}