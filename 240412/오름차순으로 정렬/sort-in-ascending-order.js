const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(it => Number(it));

for(let i = 0; i < n; i++) {
    const minIdx = arr.findIndex(it => it === Math.min(...arr.slice(i, n)));

    if(i !== minIdx) {
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}

console.log(arr.join(' '))