// filter

const myNums = [12, 45, 67, 88, 99, 100, 11, 34, 21];

const newNum = myNums.filter((num) => num < 50);
console.log(newNum);

let arr = [23, 21, 11, 34, 43, 67];
newArr = arr.filter((num) => {
    return num < 50 //to use curly brace must use return keyword.
});
console.log(newArr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History' );
console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.genre === 'Non-Fiction' && bk.publish > 1982;
} )
console.log(userBooks);