const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const n = Number(input.split('\n')[0]);
const arr = input.split('\n')[1].split(' ').map(it => Number(it)).sort((a,b) => b-a);

let result = arr.reduce((pre,cur) => {
   return pre + cur/2
});

console.log(result.toFixed(1))