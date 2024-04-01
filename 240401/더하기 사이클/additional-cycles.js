const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let n = input;
let count = 0;
while(true) {
    count++;
    const x = n.split('').pop();
    const y = n.toString()
            .split('')
            .map(it => Number(it))
            .reduce((pre, cur) => pre+cur, 0)
            .toString()
            .split('')
            .pop();
    

    n = x+y;

    if(Number(n)===Number(input)) {
        console.log(count);
        return;
    }
}