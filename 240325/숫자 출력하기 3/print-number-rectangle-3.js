const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const n = Number(input.split(' ')[0]);
const m = Number(input.split(' ')[1]);

for(let i = 1; i <= n; i++) {
    const hor = [];


    for(let j = i; j <= i + (n*(m-1)); j=j+n) {
        hor.push(j);
    }

    console.log(hor.join(' '))
}