const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const [a, b] = input.split('\n');

const arr = [];

for (let i = 0; i< a.length; i++) {
    const test = a.split('')
    .map((it, idx) => 
            idx === i
                ? it ==='0' ? '1' :'0' 
                : it)
    .join('');

    arr.push(parseInt(test, 2));
}

for (let i = 0; i < b.length; i++) {
    for(let j = 0; j < 3; j++) {
        if(b.split[i] === j) continue;
        const num = parseInt(b.split('').map((it, idx) => idx === i ? j : it).join(''), 3);
        if(arr.includes(num)) {
            console.log(num);
            return;
        }
    }
}

console.log(arr);