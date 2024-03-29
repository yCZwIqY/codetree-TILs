const fs= require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const len = input[0].split(' ')[0];
const q = input[0].split(' ')[1];

input.shift();


const MAKE_SUSHI = '100';
const VISIT_CUSTOMER = '200';
const TAKE_PHOTO = '300';

let table = Array.from({length: len}, () => []);
const actions = new Array(q);

//시간별 동작
input.map((it, index) => {
    const time = it.split(' ')[1];
    actions[index] = {
        time: Number(time),
        [it.split(' ')[0]]: {
            position: it.split(' ')[2],
            name: it.split(' ')[3],
            num: it.split(' ')[4],
        }
    };
});


const makeSushi = (action) => {
    //초밥을 테이블에 둠
    if(action[MAKE_SUSHI]) {
        sushi++;
        const position = action[MAKE_SUSHI].position;
        table[position] 
            ? table[position].push(action[MAKE_SUSHI])
            : table[position] = [action[MAKE_SUSHI]];
    }

    //손님 입장
    if(action[VISIT_CUSTOMER]) {
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

    //사진 촬영
    if(action[TAKE_PHOTO]) {
        console.log(consumer.filter(it => it.num > 0).length, sushi);
    }
}


let sushi = 0;
let consumer = [];


makeSushi(actions[0]);

actions.reduce((pre, cur) => {

    // console.log("====================== 현재 시간: " + cur.time + " ======================");
    // console.log("Table: ");
    // console.log(table);
    // console.log("------------------------------------------------");
    // console.log("Consumer: ");
    // console.log(consumer);

    if(pre) {
        //지나간 시간만큼 로테이션
        const r = (cur.time - pre.time) % len;
        const temp = table.splice(table.length - r, table.length);
        table.unshift(...temp);
    }

    makeSushi(cur);

    return cur;
});