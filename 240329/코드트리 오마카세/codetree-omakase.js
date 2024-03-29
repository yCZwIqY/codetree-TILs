const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [len, q] = input.shift().split(' ').map(Number);


const MAKE_SUSHI = 100;
const VISIT_CUSTOMER = 200;
const TAKE_PHOTO = 300;

let sushiCount = 0;
const table = new Array(len);
let customer = new Array();

const actions = [];
input.forEach(it => {
    const [type, time, position, name, num] = it.split(' ').map((x) => (isNaN(x) ? x : Number(x)));
    
    actions.push({ time, type, position, name, num });
});


for(let i = 0; i < len; i++) {
    table[i] = [];
}

let prevTime = 0;
for (const action of actions) {
    const { time, type, position, name, num } = action;

    // // console.log("====================== 현재 시간: " + time + " ======================");
    // console.log("Table: ");
    // console.log(table);
    // // console.log("------------------------------------------------");
    // console.log("Customer: ");
    // console.log(customer);

    if (type === MAKE_SUSHI) {
        sushiCount++;
        if (!table[position]) table[position] = [];
        table[position].push({ name });
    } 
    
    if (type === VISIT_CUSTOMER) {
        customer.push({name, position, num});
    } 
    
    //자신의 앞에있는 초밥을 먹음
    customer.forEach(it => {
        const name = it.name;
        const customerPosition = it.position;
        const num = it.num;

        if((table[customerPosition] ?? []).some(dish => dish.name === name)) {
            const eat = table[customerPosition].filter(dish => dish.name === name).length;
            table[customerPosition] = table[customerPosition].filter(dish => dish.name !== name);
            sushiCount-=eat;
            it.num = num - eat;
        }
    });

    //떠난 손님의 초밥 폐기
    table.forEach(it => {
        it = it.map(i => {
                return customer.some(c => c.name === it.name && c.num <= 0) ? null : i;
            }).filter(i => i!== null);
    });

    customer = customer.filter(c => c.num > 0);


    if(type === TAKE_PHOTO) {
        console.log(customer.length, sushiCount);
    }
    
    const r = (time - prevTime) % len;
    const temp = table.splice(table.length - r, table.length);
    table.unshift(...temp.reverse());
    prevTime = time;

}