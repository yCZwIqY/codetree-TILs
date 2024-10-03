const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = input.split('\n')[0];

let arr = input.split('\n')[1].split(' ').map(it => Number(it));

const merge = (low, mid, high) => {
    let i = low, j = mid + 1;
    let k = low
    const newArr = [];

    while(i <= mid && j <= high) {
        if(arr[i] < arr[j]) {
          newArr[k++] = arr[i++];
        } else {
            newArr[k++] = arr[j++];
        }
    }

    while(i <= mid) {
        newArr[k++] = arr[i++];
    }
    while(j <= high) {
        newArr[k++] = arr[j++];
    }

    for(let r = low; r <= high; r ++) {
        arr[r] = newArr[r];
    }
}

const mergeSort = (low, high) => {
    if(low < high) {
        const mid = Math.floor((low+high)/2)
        mergeSort(low, mid);
        mergeSort(mid+1, high);
        merge(low, mid, high);
    }
    
}
mergeSort(0, n - 1);
console.log(arr.join(' '))