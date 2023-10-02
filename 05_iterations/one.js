//for


const num = [12,45,67,43];
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    console.log(element);
}

for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log( i + "x" + j + "=" + i * j );
    }
    console.log("\n");
}


for (let i = 0; i <= 20; i++){
    if(i == 10){
        console.log(`Detected 10`);
        continue;
    }
    if (i == 18) {
        console.log(`Detected 18`);
        break;
    }
    console.log(`value of i is ${i}`);
}