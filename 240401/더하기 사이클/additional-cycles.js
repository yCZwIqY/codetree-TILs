const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let n = input;
let count = 1;
while(true) {
    count++;
    const x = n.toString()
            .split('')
            .map(it => Number(it))
            .reduce((pre, cur) => pre+cur, 0)
            .toString()
            .split('')
            .pop();
    const y = input.split('').pop();

    n = y+x;

    if(Number(n)===Number(input)) {
        console.log(count);
        return;
    }
}