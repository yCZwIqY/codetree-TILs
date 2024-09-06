const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input.shift());
const list = input.shift().split(' ').map(it => parseInt(it));

for(let i = 0; i <= n; i ++) {
    let min = i;
    for(let j = i+1; j <= n; j++) {
        if(list[j] < list[min]) {
            min = j;
        }
    }
    let temp = list[i];
    list[i] = list[min];
    list[min] = temp;
}

console.log(list.join(' '))