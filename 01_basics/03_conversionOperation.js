let myAcc = "CD450";
console.log(typeof myAcc);

let PersMyAcc = Number(myAcc);
console.log(PersMyAcc); // NaN
console.log(typeof PersMyAcc); //number

// "440" => 440
// "CD450" => NaN

let isLoggedIn = " ";
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let tempIsLogged = Boolean(isLoggedIn);
console.log(tempIsLogged);

// true => 1 
// false => 0
// "" => false
// " " => true