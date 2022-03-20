class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    trailingNode() {
        // if the head is nulll the list is empty, return null
        if (this.head == null) {
            return null;
        }

        // iterate through the list and return the last node
        let this_node = this.head;
        while (this_node.next != null) {
            this_node = this_node.next;
        }
        // this_node should be the last node in the list
        return this_node;
    }

    addNode(value) {
        let new_node = new Node(value);
        if (this.head == null) {
            // this will be the head node
            this.head = new_node;
        }
        else {
            // if it's not the head, just add new_node as the last node in the list
            let last_node = this.trailingNode();
            last_node.next = new_node;
        }
    }

    contains(value) {
        if (this.head == null) {
            // list is empty so the value isn't there, return false
            return false;
        }

        // assume it's not there
        var result = false;
        var this_node = this.head;
        let next_node = this_node.next;
        while(next_node.next != null) {
            if (next_node.value == value) {
                result = true;
                break;
            }
            next_node = next_node.next;
        }
        return result;
    }

    NodeCount() {
        // if the head is null then the length is 0
        if (this.head == null) {
            return 0;
        }
        var Nodes = 1; // must at least have a head node 
        var head_node = this.head;
        var next_node = head_node.next;
        while(next_node != null){
            Nodes += 1;
            next_node = next_node.next;
        }
        return Nodes;
    }
}

let myList = new SLL();

let myNode = new Node(87);
myList.addNode(myNode);

let myArray = [18,31,41,52,71,82,95,107,108,204,256,721,891];
for (i = 0; i < myArray.length; i++) {
    myNode = myList.addNode(myArray[i]);
}

let myValue = 121;
console.log("List contains " + myValue + " = " + myList.contains(myValue));

console.log("Node Count = " + myList.NodeCount());