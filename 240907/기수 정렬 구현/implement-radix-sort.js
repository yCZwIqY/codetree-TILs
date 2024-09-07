const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const len = parseInt(input.split('\n').shift());
let arr = input.split('\n')[1].split(' ');
const d = Math.max(...arr.map(it => it.length));
arr = arr.map(it => it.padStart(d, 0));

for(let i = d - 1; i >= 0; i--) {
    const tempArr = Array.from({length: 10}, () => []);

    for(let j = 0; j < len; j++) {
        let digit = parseInt(arr[j].split('')[i]);
        tempArr[digit].push(arr[j]);
    }

    const storedArr = [];
    for(let j = 0; j < 10; j++ ) {
        for(let k = 0; k < tempArr[j].length; k++) {
            storedArr.push(tempArr[j][k]);
        }
    }

    arr = storedArr;
}

console.log(arr.map(it => parseInt(it)).join(' '))