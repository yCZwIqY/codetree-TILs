const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const n = input.split(' ')[0];
const m = input.split(' ')[1];

for(let i = 1; i <= n; i++) {
    const horizontal = [];

    if(i%2 == 0) {
    
        for(let j = m*i; j>=(i-1)*m+1; j--) {
            horizontal.push(j);
        }
    } else {
        for(let j = (i-1)*m+1; j <= i*m; j++) {
            horizontal.push(j);
        }
        
    }
    console.log(horizontal.join(' '))
}