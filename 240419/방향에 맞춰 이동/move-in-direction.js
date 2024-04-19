const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input.shift();

const pos = [0, 0];

const map = {
    W: [-1, 0],
    S: [0, -1],
    N: [0, 1],
    E: [1, 0]

}

input.forEach(it => {
    const [dir, dis] = it.split(' ');
    pos[0] += map[dir][0] * dis;
    pos[1] += map[dir][1] * dis
});

console.log(pos.join(' '))