const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const arr = input.split('\n').map(it => Number(it)).sort((a,b) => a - b);

const result = [];

for(let i =1; i <= 30; i ++) {
    if(!arr.includes(i)) {
        result.push(i);
    }
}


console.log(Math.min(...result));
console.log(Math.max(...result));