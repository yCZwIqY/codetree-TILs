class Node {
    constructor(pre, next, value) {
        this.pre = pre;
        this.next = next;
        this.value = value;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.nodeNum = 0;
    }

    pushFront(value) {
        const newNode = new Node(null, this.head, value);
        newNode.next = this.head;
    
        if(this.head) {
             this.head.pre = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.nodeNum++;
    }

    pushBack(value) {
        const newNode = new Node(this.tail, null, value);
        newNode.prev = this.tail;

        if(this.tail) {
             this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
        this.nodeNum++;
    }

    popFront() {
        if(!this.head) {
            console.log("List is empty");
            return;
        }

        const returnValue = this.head;
        if(this.head.next) {
            returnValue.next.pre = null;
            this.head = returnValue.next;
            returnValue.next = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.nodeNum--;
        console.log(returnValue.value);
    }

    popBack() {
        if(!this.tail) {
            console.log("List is empty");
            return;
        }

        const returnValue = this.tail;
        if(this.tail.pre) {
            returnValue.pre.next = null;
            this.tail = returnValue.pre;
            returnValue.pre = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.nodeNum--;
        console.log(returnValue.value);
    }

    size() {
        console.log(this.nodeNum);
    }

    empty() {
        console.log(this.nodeNum === 0 ? 1 : 0);
    }

    front() {
        if(!this.head) {
            console.log("List is empty");
            return;
        } 
        console.log(this.head.value)
    }

    back() {
        if(!this.tail) {
            console.log("List is empty");
            return;
        } 
        console.log(this.tail.value)
    }
}


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input.shift();

const doublyLinkedList = new DoublyLinkedList();

for(let item of input) {
    const [command, value] = item.split(' ');
    // console.log(doublyLinkedList);
    switch(command) {
        case 'push_front':
            doublyLinkedList.pushFront(value);
            break;
        case 'push_back':
            doublyLinkedList.pushBack(value);
            break;
        case 'pop_front':
            doublyLinkedList.popFront();
            break;
        case 'pop_back':
            doublyLinkedList.popBack();
            break;
        case 'size':
            doublyLinkedList.size();
            break;
        case 'empty':
            doublyLinkedList.empty();
            break;
        case 'front':
            doublyLinkedList.front();
            break;
        case 'back':
            doublyLinkedList.back();
            break;
    }
}