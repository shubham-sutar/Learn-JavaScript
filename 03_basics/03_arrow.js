const user = {
    userName : "shubham",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.userName} , welcome to the website`);
        console.log(this); //current block of scope
    }
}

user.welcomeMsg();
console.log(this); // globle scope window

//================================================

function myObj() {
    let user = "shubham";

    console.log(this.user); //error bcoz this used only under object.
}

myObj();

//================================================

const myBike = function(){
    console.log(`My first bike comming soon`);
} 
const myBike1 = () => {
    console.log(`My first bike arrived`);
} 

myBike();
myBike1();

// Arrow Function

const add = (num1,num2) =>{
    let result = num1 + num2;
    return result;

}

console.log(add(12,12));

const sub = (num1, num2) => num1 - num2; //use return only in the curly brackets

const mult = (num1,num2) => (num1 * num2);

//=====================================================

// Imediately Invoked Function Expressions (IIFE)

(function chai(kon){
    console.log(`${kon} bahot garm hai`); //named IIFE
})('chai');

(function coffe(){
    console.log(`coffe cool hai`);
})();

((cream) => {
    console.log(`Ice Hai Kya? ${cream}`);
})("barf");
