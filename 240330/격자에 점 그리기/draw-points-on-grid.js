const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(it => Number(it));

const coinPos = input;

const grid = Array.from({length: n}, () => Array.from({length: n}, () => 0));

coinPos.map((it, index) => {
    const [r, c] = it.split(' ').map(it => Number(it) - 1);
    grid[r][c] = index + 1;
});

grid.map(it => console.log(it.join(' ')));