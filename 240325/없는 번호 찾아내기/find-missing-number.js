const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const arr = input.split('\n').map(it => Number(it)).sort((a,b) => a-b);

const result = [];

arr.reduce((pre, cur) => {
    if(Math.abs(pre - cur) >= 2) {  
        result.push(pre+1);
    }
    return cur;
});

console.log(Math.min(...result));
console.log(Math.max(...result));