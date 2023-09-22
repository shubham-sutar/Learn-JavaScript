//Arrays
let marvel_heros = ['Iron man','thor','spiderman'];
let dc_heros = ['flash','batman','superman'];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

// let avengers = marvel_heros.concat(dc_heros);
// console.log(avengers);

const newComic = [...marvel_heros, ...dc_heros];
console.log(newComic); 