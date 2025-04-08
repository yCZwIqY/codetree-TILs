const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const customers = input.shift().trim().split(' ').map(it => Number(it));
const [lMax, mMax] = input.shift().trim().split(' ').map(it => Number(it));

let result = 0;
customers.forEach((num) => {
    let member = num <= lMax ? 0 : Math.ceil((num - lMax)/mMax)
    result += member + 1;
})

console.log(result)