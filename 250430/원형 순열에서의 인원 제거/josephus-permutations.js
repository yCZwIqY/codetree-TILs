const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);
// Please Write your code here.

let queue = Array.from({length: n}, (_, index) => index + 1);
const result = [];

while(queue.length > 0) {
    for(let i = 0; i < k - 1; i++) {
        queue.push(queue.shift())
    }
    result.push(queue.shift());
}

console.log(result.join(' '))