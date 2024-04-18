const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, k] = input.shift().split(' ');
const seq = input.shift().split(' ');

const posInfo = {};
const arr = Array.from({length: n}, () => null);

for(let i = 1; i <= n; i++) {
    posInfo[i] = {pos: null, before: null, after: null}
}

for(let i = 0; i < seq.length; i++) {
    const idx = seq[i];
    posInfo[idx] = {
        ...posInfo[idx],
        after: seq.slice(0, i),
        before: seq.slice(i+1)
    }
}

for(let i of input) {
    const [num, s] = i.split(' ');
    arr[s - 1] = num;
    posInfo[num] = {
        ...posInfo[num],
        pos: s
    };
}

seq.filter(it => !arr.includes(it)).forEach(it => {

});