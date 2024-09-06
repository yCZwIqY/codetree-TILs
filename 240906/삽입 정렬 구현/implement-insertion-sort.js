const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = parseInt(input.shift());
const arr = input.shift().split(' ').map(it => parseInt(it));

for(let i = 1; i < n; i ++) {
    let j = i - 1;
    let key = arr[i];
    while(j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]
        j--;
    }
    arr[j + 1] = key;
}

console.log(arr.join(' '))