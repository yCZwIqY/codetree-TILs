const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input.split('\n')[0]);
const arr = input.split('\n')[1].split(' ').map(it => Number(it));


let sortedArr = [...arr];

const heapify = (i, n) => {
    let lagestIdx = i;
    const leftIdx =((lagestIdx + 1) * 2) - 1;
    const rightIdx = ((lagestIdx + 1) * 2);

    if(leftIdx <= n && sortedArr[leftIdx] > sortedArr[lagestIdx]) {
        lagestIdx = leftIdx
    }
    if(rightIdx <= n && sortedArr[rightIdx] > sortedArr[lagestIdx]) {
        lagestIdx = rightIdx;
    }

    if(lagestIdx != i) {
       [sortedArr[i], sortedArr[lagestIdx]] = [sortedArr[lagestIdx], sortedArr[i]];
        heapify(lagestIdx, n);
    }
}

for (let i = Math.floor(n/2); i >= 0 ; i--) {
    heapify(i, n);
}
for (let i = n-1; i >= 0; i--) {
    [sortedArr[0], sortedArr[i]] = [sortedArr[i], sortedArr[0]];
    heapify(0, i - 1);
}

console.log(sortedArr.join(' '))