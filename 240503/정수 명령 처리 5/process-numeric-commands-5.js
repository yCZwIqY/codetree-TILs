const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const arr = [];


for(let i of input) {
    const command = i.split(' ')[0];
    const num = Number(i.split(' ')[1]);
    switch(command) {
        case 'push_back':
            arr.push(num);
            break;
        case 'pop_back':
            arr.pop();
            break;
        case 'size':
            console.log(arr.length);
            break;
        case 'get':
            console.log(arr[num - 1])
            break;
        default:
            break;
    }
}