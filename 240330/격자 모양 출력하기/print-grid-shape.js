const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift();

const grid = Array.from({length: n}, (_, i) => Array.from({length: n}, (__, j) => input.includes(`${i+1} ${j+1}`) ? (i+1)*(j+1) : 0 ));

grid.map(it => console.log(it.join(' ')));