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