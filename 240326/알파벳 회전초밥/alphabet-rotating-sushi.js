const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const a = input.split('\n')[0].split('');
const b = input.split('\n')[1];

const idx = [];

b.split('').map(it => {
    idx.push(a.indexOf(it));
})

let cnt = 1;

idx.reduce((pre, cur) => {
    if(pre >= cur) {
        cnt++;
    }
    return cur;
});

console.log(cnt);