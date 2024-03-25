const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const n = Number(input.split('\n')[0]);
const nums = input.split('\n')[1].split(' ').map(it => Number(it));


let min = -1;
let max = -1;

nums.forEach(it => {
    if(Math.abs(100 - min) > Math.abs(100 - it)) {
        min = it;
    }

    if(it >= 100 && Math.abs(100 - max) > Math.abs(100 - it)) {
        max = it;
    }
});

console.log(min, max);