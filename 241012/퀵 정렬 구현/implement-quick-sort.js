const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input[0];
let arr = input[1].split(' ').map(it => Number(it));

const partition = (low, high) => {
    const pivot = arr[high]
    let i = low - 1;

    for(let j = low; j < high; j++) {
        if(arr[j] <= pivot) {
            i++;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }

    i++;
    let temp = arr[high];
    arr[high] = arr[i];
    arr[i] = temp;

    return i
}

const quick = (low, high) => {
    if (low < high) {
        const pos = partition(low, high);
        quick(low, pos - 1);
        quick(pos + 1, high); 
    }
}

quick(0, n - 1)
console.log(arr.join(' '))