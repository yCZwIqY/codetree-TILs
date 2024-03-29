const fs= require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const len = input[0].split(' ')[0];
const q = input[0].split(' ')[1];

input.shift();


const MAKE_SUSHI = '100';
const VISIT_CUSTOMER = '200';
const TAKE_PHOTO = '300';

let table = Array.from({length: len}, () => []);

const actions = []

let minTime = Number.MAX_SAFE_INTEGER;
let maxTime = Number.MIN_SAFE_INTEGER;

//시간별 동작
input.map((it) => {
    const time = it.split(' ')[1];
    minTime = Math.min(time, minTime);
    maxTime = Math.max(maxTime, time);
    actions.push({
        time: Number(time),
        [it.split(' ')[0]]: {
            position: it.split(' ')[2],
            name: it.split(' ')[3],
            num: it.split(' ')[4],
        }
    })
    // actions[time] = {
    //     ...actions[time],
    //     [it.split(' ')[0]]: {
    //         position: it.split(' ')[2],
    //         name: it.split(' ')[3],
    //         num: it.split(' ')[4],
    //     }
    // } 
});


const makeSushi = (action) => {
    //초밥을 테이블에 둠
    if(action[MAKE_SUSHI]) {
        sushi++;
        const position = action[MAKE_SUSHI].position;
        table[position].push(action[MAKE_SUSHI]);
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



// for(let time = minTime; time <= maxTime;) {

//     const action = actions[time];

//     //회전
//     if(!action) {
//         const last = table.pop();
//         table.unshift(last);
//         continue;
//     }
    
//     //초밥을 테이블에 둠
//     if(action[MAKE_SUSHI]) {
//         count++;
//         sushi++;
//         const position = action[MAKE_SUSHI].position;
//         table[position].push(action[MAKE_SUSHI]);
//     }

//     //손님 입장
//     if(action[VISIT_CUSTOMER]) {
//         count++;
//         consumer.push(action[VISIT_CUSTOMER]);
//     }

//     //자신의 앞에있는 초밥을 먹음
//     consumer.forEach(it => {
//         const name = it.name;
//         const position = it.position;
//         const num = it.num;
//         if(table[position].some(dish => dish.name === name)) {
//             const eat = table[position].filter(dish => dish.name === name).length;
//             table[position] = table[position].filter(dish => dish.name !== name);
        
//             sushi-=eat;
//             it.num = num - eat
//         }
//     });

//     //떠난 손님의 초밥 폐기
//     table.forEach(it => {
//         it = it.map(i => {
//                 return consumer.some(c => c.name === it.name && c.num <= 0) ? null : i;
//             }).filter(i => i!== null);
//     });

//     //회전
//     const last = table.pop();
//     table.unshift(last);


//     //사진 촬영
//     if(action[TAKE_PHOTO]) {
//         count++;
//         console.log(consumer.filter(it => it.num > 0).length, sushi);
//     }

//     //모든 명령을 수행하면 종료
//     if(count >= q) {
//         return;
//     }
// }