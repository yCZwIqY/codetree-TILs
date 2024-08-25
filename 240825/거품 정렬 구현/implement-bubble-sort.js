const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(inputs.shift());
const list = inputs.shift().split(' ').map(it => parseInt(it));

for(let i = 0; i <= n; i ++) {
    for(let j = i; j <= n; j++) {
        if(list[i] > list[j]) {
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
        }
    }
}

console.log(list.join(' '))