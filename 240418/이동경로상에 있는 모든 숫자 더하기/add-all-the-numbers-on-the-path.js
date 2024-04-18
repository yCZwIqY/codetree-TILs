const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, t] = input.shift().split(' ');
const commands = input.shift().split('');
const grid = input.map(it => it.split(' '));
const center = Math.floor(n/2);
const result = [];


let dir = 1; //top: 1 right: 2 bottom: 3 left: 4
let pos = {
    x: center,
    y: center
}
result.push(grid[pos.x][pos.y]);

for(let command of commands) {
    if(command === 'R') dir+=1;
    else if(command === 'L') dir-=1;
    else {
        if(dir===1 && pos.y - 1 >= 0) {
            pos.y-=1;
            result.push(grid[pos.y][pos.x]);
        }
        else if(dir===2 && pos.x + 1 < n) {
            pos.x+=1;
            result.push(grid[pos.y][pos.x]);
        }
        else if(dir===3 && pos.y + 1 < n) {
            pos.y+=1;
            result.push(grid[pos.y][pos.x]);
        }
        else if(dir===4 && pos.x - 1 >= 0) {
            pos.x-=1;
            result.push(grid[pos.y][pos.x]);
        }
    }
    if(dir > 4) dir = 1;
    if(dir <= 0) dir = 4;
}

const sum = result.reduce((pre, cur) => Number(pre)+Number(cur), 0);
console.log(sum);