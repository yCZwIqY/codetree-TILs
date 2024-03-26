const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const a = input.split('\n')[0].split('');
const b = input.split('\n')[1];

let cnt = 1;
b.split('').reduce((pre, cur) => {
    if(a.indexOf(pre) >= a.indexOf(cur)) {
        cnt++;
    }
    return cur;
});

console.log(cnt);