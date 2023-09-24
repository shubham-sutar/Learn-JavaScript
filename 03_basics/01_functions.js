 function myFunction(){
    console.log("this is my function");
 }

 myFunction();

 function addition(num1, num2){
    let result = num1+num2;
    console.log(result);
    return result;
 }

 addition(12,12);

 function mult(num1, num2){
    let result = num1 * num2;
    return result;
 }

 const result = mult(12,12);
 console.log('result is: ',result);

 function div(num1, num2){
    return num1 / num2;
 }

console.log(div(12,12));