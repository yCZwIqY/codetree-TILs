const fs= require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const len = input[0].split(' ')[0];
const q = input[0].split(' ')[1];

input.shift();


const MAKE_SUSHI = '100';
const VISIT_CUSTOMER = '200';
const TAKE_PHOTO = '300';

const table = Array.from({length: len}, () => []);

const actions = {}

input.map((it) => {
    const time = it.split(' ')[1];
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

let time = 0;

while(true) {
    time++;
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

    consumer = consumer.map(it => {
        const name = it.name;
        const position = it.position;
        const num = it.num;

        if(table[position].some(dish => dish.name === name)) {
            table[position] = table[position].filter(dish => dish.name !== name);
            sushi--;
            return num - 1 <= 0 ? null : {
                name,
                position,
                num: num - 1
            }
        }

        return it;
    })
    .filter(it => it!==null);

    //rotation
    const last = table.pop();
    table.unshift(last);



    if(action[TAKE_PHOTO]) {
        count++;
        console.log(consumer.length, sushi);
    }

    if(count >= q) {
        return;
    }
}