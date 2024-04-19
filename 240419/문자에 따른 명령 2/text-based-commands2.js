const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
const pos = [0, 0];
let dir = 0;

input.forEach(it => {
    if(it==='L') dir = (dir+3) % 4;
    else if(it==='R') dir = (dir+1) % 4;
    else {
        pos[0] += dx[dir];
        pos[1] += dy[dir];
    }
});

console.log(pos.join(' '))