const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const arr = input.shift().split(' ').map(it => Number(it));

for(let i =0; i<n; i++) {
    for(let j = 0; j<n; j++) {
        if(arr[i]<arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr.join(' '))