class Node {
    constructor(data) {
        this.data = data;
        this.next = null;    
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        // create new node
        let new_node = new Node(value);

        if (!this.head) {
            this.head = new_node;
            return this.head;
        }

        new_node.next = this.head;
        this.head = new_node;
        return this.head;
    }

    removeFront() {
        if (!this.head) {
            // list is empty, return null
            return null;
        }

        if (!this.head.next) {
            // head has no next entry, return null
            return null;
        }

        // remove the head node and return the new head
        var oldnode = this.head;
        this.head = oldnode.next;
        return this.head;
    }

    Front() {
        if (!this.head) {
            // no head node, return null
            return null
        }

        // we have a head node, return the value
        return this.head.value;
    }
}