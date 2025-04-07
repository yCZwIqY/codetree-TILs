const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const bracketStr = input[0];
// Please write your code here.

if (bracketStr.length % 2 !== 0 ||  bracketStr[0] === ')') {
    console.log('No');
    return;
}

const stack = [];
bracketStr.split('').forEach(it => {
    if(it === '(') {
        stack.push(it);
    } else {
        stack.pop();
    }
});

console.log(stack.length > 0 ?  'No' : 'Yes');