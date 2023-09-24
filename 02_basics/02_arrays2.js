//Arrays
let marvel_heros = ['Iron man','thor','spiderman'];
let dc_heros = ['flash','batman','superman'];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

// let avengers = marvel_heros.concat(dc_heros);
// console.log(avengers);

const newComic = [...marvel_heros, ...dc_heros];
console.log(newComic); 

const another_Array = [1, 2, 3, ["shubham","sayali"], 6,['x', 'y', 'z',[0,900]]];
let new_one_arr = another_Array.flat(Infinity);
console.log(new_one_arr);

console.log(Array.isArray("shubham")); //false asking array or not
console.log(Array.from("shubham")); //converting to array ['s', 'h', 'u', 'b', 'h', 'a', 'm']

let score = 100;
let wicket = 9;
let runs = 250;

console.log(Array.of(score,wicket,runs));