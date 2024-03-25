const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const arr = input.split('\n').map(it => Number(it)).sort((a,b) => a - b);

const result = [];

for(let i =1; i <= 28; i ++) {
    if(arr[i-1] !== i) {
        result.push(i);
    }
}

if(result.length <= 0) {
    console.log(arr[26]);
    console.log(arr[27]);
    return;
}

console.log(Math.min(...result));
console.log(Math.max(...result));