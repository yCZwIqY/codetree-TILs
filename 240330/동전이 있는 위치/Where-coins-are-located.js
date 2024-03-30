const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input.shift().split(' ').map(it => Number(it));

const coinPost = input.join('\n');

const grid = Array.from({length: n}, (_, i) => Array.from({length: n}, (__, j) => coinPost.includes(`${i + 1} ${j + 1}`) ?1:0));

grid.map(it => console.log(it.join(' ')))