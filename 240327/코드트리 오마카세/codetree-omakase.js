const fs= require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const len = input[0].split(' ')[0];
const q = input[0].split(' ')[1];

input.shift();


const MAKE_SUSHI = '100';
const VISIT_CUSTOMER = '200';
const TAKE_PHOTO = '300';

let table = Array.from({length: len}, () => []);

const actions = {}

let minTime = Number.MAX_SAFE_INTEGER;
let maxTime = Number.MIN_SAFE_INTEGER;

input.map((it) => {
    const time = it.split(' ')[1];
    minTime = Math.min(time, minTime);
    maxTime = Math.max(maxTime, time);
    actions[time] = {
        ...actions[time],
        [it.split(' ')[0]]: {
            position: it.split(' ')[2],
            name: it.split(' ')[3],
            num: it.split(' ')[4],
        }
    } 
});


let count = 0;
let sushi = 0;
let consumer = [];

for(let time = minTime; time <= maxTime; time++) {
    //회전
    const action = actions[time];
    if(!action) {
        const last = table.pop();
        table.unshift(last);
        continue;
    }
    
    if(action[MAKE_SUSHI]) {
        count++;
        sushi++;
        const position = action[MAKE_SUSHI].position;
        table[position].push(action[MAKE_SUSHI]);
    }

    if(action[VISIT_CUSTOMER]) {
        count++;
        consumer.push(action[VISIT_CUSTOMER]);
    }

    //자신의 앞에있는 초밥을 먹음
    consumer.forEach(it => {
        const name = it.name;
        const position = it.position;
        const num = it.num;
        if(table[position].some(dish => dish.name === name)) {
            const eat = table[position].filter(dish => dish.name === name).length;
            table[position] = table[position].filter(dish => dish.name !== name);
        
            sushi-=eat;
            it.num = num - eat
        }
    });

    //떠난 손님의 초밥 폐기
    table.forEach(it => {
        it = it.map(i => {
                return consumer.some(c => c.name === it.name && c.num <= 0) ? null : i;
            }).filter(i => i!== null);
    });

    //회전    
    const last = table.pop();
    table.unshift(last);



    if(action[TAKE_PHOTO]) {
        count++;
        console.log(consumer.filter(it => it.num > 0).length, sushi);
    }

    if(count >= q) {
        return;
    }
}