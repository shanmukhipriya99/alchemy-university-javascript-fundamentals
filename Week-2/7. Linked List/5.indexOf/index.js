class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        node.next = this.head;
        this.head = node; 
    }

    addLast(node) {
        if(!this.head) {
            this.head = node
            return
        }
        let ref = this.head;
        while(ref.next) {
            ref = ref.next
        }
        ref.next = node
    }

    indexOf(node) {
        let ind = 0;
        if (node === this.head) {
            return ind;
        }
        let ref = this.head.next;
        while(ref.next) {
            if (ref === node) {
                return ind
            }
            ref = ref.next
            ind++
        }
        return ind+1
    }
}

module.exports = LinkedList;