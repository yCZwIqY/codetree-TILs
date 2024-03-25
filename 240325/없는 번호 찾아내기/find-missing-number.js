const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const arr = input.split('\n').map(it => Number(it)).sort((a,b) => a - b);

const result = [];

for(let i =1; i <= 28; i ++) {
    if(arr[i-1] !== i + result.length) {
        result.push(i + result.length);
    }
}

console.log(Math.min(...result));
console.log(Math.max(...result));