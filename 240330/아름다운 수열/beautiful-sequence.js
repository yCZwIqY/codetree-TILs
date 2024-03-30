const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const a = input.splice(0, n).map(it => Number(it));
const m = Number(input.shift());
const b = input.map(it => Number(it));


const allCase = new Array();
const min = Math.min(...b);
const max = 10 - Math.min(...b);

function permute(arr, current = []) {
    if (arr.length === 0) {
        return [current];
    }

    const permutations = [];

    for (let i = 0; i < arr.length; i++) {
        const next = arr.slice(); // 배열 복사
        const removed = next.splice(i, 1); // 선택된 요소 제거
        permutations.push(...permute(next, current.concat(removed))); // 재귀 호출
    }

    return permutations;
}

const allPer = permute(b);

allPer.map(it => {
    for(let i = 0; i < m; i++) {
        for(let j = 1; j < min; j ++) {
            allCase.push(it.map(it => it - j).join(' '));
        }
        for(let j = 1; j < max; j ++) {
            allCase.push(it.map(it => it + j).join(' '));
        }
    }
});


let cnt = 0;
const resultList = [];
for(let i = 0; i <= n-m; i++) {
    const cur = a.slice(i, i + m).join(' ');

    if(allCase.includes(cur)) {
        cnt++;
        resultList.push(i+1);
    }
}

console.log(cnt);
resultList.map(it => console.log(it));