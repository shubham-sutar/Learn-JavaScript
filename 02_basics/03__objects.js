//object literals

let mySym = Symbol("key");

const JsUser = {
    [mySym] : "myKey",
    fname : "shubham",
    age : 25,
    location : "kolhapur",
    email : "shubh@MediaList.com",
    isLoggedIn : false,
    lastLoginDays : ["mon","sat"]
}

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(typeof JsUser[mySym]);

JsUser.email = "shubham@gmail.com"; //chng email
console.log(JsUser['email']); //accessing
//Object.freeze(JsUser); // once freeze cannot change obj

JsUser.location = "pune";
console.log(JsUser['location']);

JsUser.greeting = function(){
    console.log(`hello user,${this.fname}.`);
}
console.log(JsUser.greeting());