const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);
const q = [];

// Please write your code here.

const func = {
    push: (num) => {
        
    },
    front: () => {
       return q[q.length - 1]
    },
    size: () => {
        return q.length
    },
    pop: () => {
        q.shift();
    },
    empty: () => {
        
    }
}
commands.forEach((command) => {
    const [cmd, num] = command.split(' ');
    switch(cmd) {
       case "push":
        q.push(num)
        break;
       case "pop":
        console.log(q.shift());
        break;
       case "size":
        console.log(q.length)
        break;
       case "empty":
        console.log(q.length <= 0 ? 1 : 0);
        break;
       case "front":
        console.log(q[0]);
        break;
        default:
        break;
    }
})
