const BinaryHeap = require('../binaryHeap')


let Node = class {
    constructor(x, y, weight, h, g) {
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.h = h;
        this.g = g;
        this.f = g + h;
    }
    get priority(){
        return this.f;
    }
}

let bh = new BinaryHeap('f');

test('adding 1 item', () => {
    node = new Node(0, 0, 0, 0, 0);
    bh.add(node);
    expect(bh.length).toBe(1);
});

test('adding 2 items', () => {
    node = new Node(0, 1, 0, 1, 0);
    bh.add(node);
    expect(bh.length).toBe(2)
});

test('adding 11 items and checking the peak node', () => {
    bh.add(new Node(0, 1, 0, 1, 0));
    bh.add(new Node(1, 2, 0, 2, 1));
    bh.add(new Node(0, 2, 0, 2, 0));
    bh.add(new Node(1, 3, 0, 2, 2));
    bh.add(new Node(1, 4, 0, 3, 2));
    bh.add(new Node(1, 5, 0, 6, 2));
    bh.add(new Node(1, 6, 0, 3, 2));
    node = new Node(1, 7, 0, 9, 7);
    bh.add(node);
    bh.add(new Node(0, 8, 0, 2, 1));
    expect(bh.length).toBe(11)
    expect(bh.peak()).toBe(node)
});

test('cheking sorting', ()=>{
    bh.sort();
    for (let i=0;i<bh.length-1;i++){
        expect(bh.readByIndex(i).priority).toBeGreaterThanOrEqual(bh.readByIndex(i+1).priority)
    }
})

