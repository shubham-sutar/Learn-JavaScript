//reduce

const myNum = [1, 2, 3];
let newNums = myNum.reduce((acc, current) => {
    return acc + current
}, 0);

console.log(newNums);

const bill = [250, 12, 20, 100, 150, 50];
let newBill = bill.reduce( (acc,current) => acc+current, 0 );
console.log(newBill);

const course = [{
    courseName : 'java',
    price : 399
},
{
    courseName : 'python',
    price : 499
},
{
    courseName : 'dev-ops',
    price : 799
}]

let bill1 = course.reduce( (acc,items) => acc + items.price,0);
console.log(bill1);