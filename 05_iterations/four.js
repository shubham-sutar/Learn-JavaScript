//Map

let arr = [2, 5, 7, 1, 9, 8];

let myNums = arr.map( (num) => {
    return num+10;
} )

console.log(myNums);

//chaining

let newArr = [ 2, 34, 56, 67, 100, 45];

let myArr = newArr
                  .map( (num) => num*2)
                  .map( (num) => num/2 )
                  .filter( (num) => num>50);
console.log(myArr);