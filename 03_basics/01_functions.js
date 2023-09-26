 function myFunction(){
    console.log("this is my function");
 }

 myFunction();

//-----------------------------------------

 function addition(num1, num2){
    let result = num1+num2;
    console.log(result);
    return result;
 }

 addition(12,12);

//-----------------------------------------

 function mult(num1, num2){
    let result = num1 * num2;
    return result;
 }

 const result = mult(12,12);
 console.log('result is: ',result);

 //-----------------------------------------

 function div(num1, num2){
    return num1 / num2;
 }

console.log(div(12,12));

//-----------------------------------------
function loginUserMessage(username = "hey"){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

let newUser = loginUserMessage();
console.log(newUser);

//------------------------------------------

const user = {
    username : "shubham",
    price : 399
}

function myUser(obj){
    console.log(`username is ${obj.username} and price is ${obj.price}`);
}

//myUser(user);
myUser({
    username : "sam",
    price : 399
})

//-----------------------------------------

const myArray = [100, 200, 300, 400];

function myNewFunction(obj){
    return obj[1];
}

console.log(myNewFunction(myArray));