const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const len = parseInt(input.split('\n').shift());
let arr = input.split('\n')[1].split(' ');

const d = Math.max(...arr.map(it => it.length)) - 1;

for(let i = d; i >= 0; i--) {
    const tempArr = Array.from({length: 10}, () => []);

    for(let j = 0; j < len; j++) {
        let digit = parseInt(arr[j].split('')[i]);
        if(digit === NaN) {
            digit = 0;
        }
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

console.log(arr.join(' '))