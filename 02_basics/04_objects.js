
const tinderUser = {};

tinderUser.id = "123jbl";
tinderUser.fname = "shubham";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const fbUser = {
    fname : "shubham sutar",
    id : "1001B",
    age : 25,
    instagram :{
        id : "DecentBoy",
        Username : "shubham"
    },
    twitter : {
        id : "localBoy",
        userName : "shubham"
    }
};

console.log(fbUser.instagram.id);
console.log(fbUser.twitter.id);

const obj1 = {
    color : "red"
};

const obj2 = {
    body : "carbonFiber"
};

const obj3 = {
    model : 2022
};


// const obj4 = {obj1, obj2, obj3}; // cant use this
// console.log(obj4); 

// const obj4 = {...obj1, ...obj2, ...obj3}; //easy to use
// console.log(obj4);

// const obj4 = Object.assign (obj1, obj2, obj3)
// console.log(obj4);

//how to find keys or values

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

