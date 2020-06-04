// impelimenting general purpose max binary heap
let BinaryHeap = class {
    constructor(priorityField) {// priorityField is a string identify the name of priority field of node
        this._bh = []; 
        this.priorityField = priorityField;
    }
    add(node) { 
        this._bh.push(node);
        let currentIdx = this._bh.length - 1;
        let parrentIdx = ((currentIdx + 1) >> 1) - 1;   // get parrent index by fast dividing by 2
        while (this._bh[parrentIdx] &&
            this._bh[parrentIdx][this.priorityField] < node[this.priorityField]) {
            this._bh[currentIdx] = this._bh[parrentIdx];
            this._bh[parrentIdx] = node;
            currentIdx = parrentIdx;
            parrentIdx = ((currentIdx + 1) >> 1) - 1;
        }
    }

    remove() {
        if (this._bh.length <=1) return this._bh.pop();
        const removedItem = this._bh[0];
        const movedItem = this._bh.pop();
        this._bh[0] = movedItem;
        let currentIdx = 0;
        let childIdx = 2;
        while (this._bh.length > childIdx - 1) {
            
            let childGtIdx = this._bh[childIdx - 1][this.priorityField] < (this._bh[childIdx]?
                this._bh[childIdx][this.priorityField]:undefined) ? childIdx : childIdx - 1;
            if (this._bh[childGtIdx][this.priorityField] > movedItem[this.priorityField]) {
                this._bh[currentIdx] = this._bh[childGtIdx];
                this._bh[childGtIdx] = movedItem;
                currentIdx = childGtIdx;
                childIdx = (currentIdx + 1) << 1;
            } else break;
        }
        return removedItem;
    }

    sort(){
        let bhTemp = [];
        while(this._bh.length > 0){
            bhTemp.push(this.remove());
            //console.log(bhTemp);
        };
        this._bh = bhTemp;
        return this._bh;
    }

    get length(){
        return this._bh.length; 
    }

    peak(){
        return this._bh[0];
    }

    readByIndex(index){
        return this._bh[index];
    }
}

module.exports = BinaryHeap;

