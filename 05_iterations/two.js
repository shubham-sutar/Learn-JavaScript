// For in loop
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    csharp : 'c#'
}

for (const key in myObject) {
    console.log(`${key} shortcut of ${myObject[key]}`);
}

const mobiles = ['nokia','moto','mi','samsung'];
for (const items in mobiles) {
    console.log(mobiles[items]);
}

const map = new Map();
map.set('a',"apple");
map.set('b',"bharat");
map.set('c',"cat");
map.set('e',"engine");
map.set('d',"dog");

console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
}

//Foreach loop

const logo = ['honda','hero','suzuki','BMD'];

logo.forEach(myLogo);

function myLogo(items){
    console.log(items);
}

console.log(`second method`);
logo.forEach(function(items){
    console.log(items);
})

console.log(`thired method`);
logo.forEach( (items) => {
    console.log(items);
} )

console.log(`fourth method`);
function printMe(items){
    console.log(items);
}

logo.forEach(printMe);
mobiles.forEach(printMe);

logo.forEach( (items,index,arr) => {
    console.log(items,index,arr);
} )

const lang = [{
    languageName :'english',
    fileName : 'en'
},
{
    languageName :'Java',
    fileName : 'java'
},
{
    languageName :'python',
    fileName : 'py'
}];

lang.forEach( (items) => {
    console.log(items.languageName);
})