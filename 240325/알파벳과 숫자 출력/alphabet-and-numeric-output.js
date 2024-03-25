const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin'));

let startStr=65;
let startNum=1;


for(let i = 0; i < input; i++) {
    const arr = [];
    for(let j = 0; j < input-i; j++) {
        arr.push(String.fromCharCode(startStr++));
        if(startStr > 90) {
            startStr = 65;
        }    
    }
    for(let j = 0; j < i + 1; j++) {
        arr.push(startNum++);
        if(startNum > 9) {
            startNum = 1;
        }  
    }
    console.log(arr.join(' '))
}