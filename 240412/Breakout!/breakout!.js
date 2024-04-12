const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input.split('\n')[0]);
const arr = input.split('\n')[1].split(' ').map(it => Number(it));
let nums = input.split('\n')[1].replaceAll('-1', '0').split(' ').map(it => Number(it));

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

const pos = arr.map((it, idx) => ({num: it, id: idx})).filter(it => it.num === -1).map(it => it.id);

const isBreakout = (numArr) => {
    let invalid = false;
    // if(numArr[0] === 0) {   
        numArr.reduce((pre, cur) => {
            if(cur !== 0 && cur <= pre) {
                invalid = true;
            } 
            return cur;
        });
    // } else {
        // invalid = true;
    // }


    const cnt = numArr.filter(it => it===0).length;
    if(!invalid && cnt > 0) {
        min = Math.min(min, cnt);
        max = Math.max(max, cnt);
    }
}

isBreakout(nums);


for(let i = 1; i <= 9; i++) {
    for(let j = 0; j < pos.length; j++) {
        const newArr = nums.map((it, idx) => idx===pos[j] ? i : it);
        isBreakout(newArr)
    }
    nums = arr.map(it => it === -1 ? i: it);
}

console.log(min, max)