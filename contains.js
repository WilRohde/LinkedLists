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
    Display() {
        // if the head node is null then let them know it's empty
        if (this.head == null) {
            return "empty";
        }
        var display = "";
        var head_node = this.head;
        display = display + head_node.value + ", ";
        var next_node = head_node.next;
        while(next_node != null){
            if (next_node.next != null) {
                display = display + next_node.value + ", ";
            }
            else {
                display = display + next_node.value;
            }
            next_node = next_node.next;
        }
        return display;
    }
    min() {
        // if the list is empty return null
        if (this.head == null) {
            return null;
        }
        var next_node = this.head;
        var minimum = next_node.value;
        while (next_node != null) {
            if (next_node.value < minimum) {
                minimum = next_node.value;
            }
            next_node = next_node.next;
        }
        return minimum;
    }

    max() {
        // if the list is empty return null
        if (this.head == null) {
            return null;
        }
        var next_node = this.head;
        var maximum = next_node.value;
        while (next_node != null) {
            if (next_node.value > maximum) {
                maximum = next_node.value;
            }
            next_node = next_node.next;
        }
        return maximum;
    }

    average() {
        var total = 0;
        var value_count = 0;
        // if the list is empty return 0
        if (this.head == null) {
            return total;
        }
        var next_node = this.head;
        while (next_node != null) {
            total = total + next_node.value;
            value_count += 1;
            next_node = next_node.next;
        }
        // calculate the average
        var avg = (total / value_count);
        return avg;
    }

    back() {
        // if the list is empty return null
        if (this.head == null) {
            return null;
        }

        var next_node = this.head;
        var last_value = next_node.value;
        while(next_node != null) {
            last_value = next_node.value;
            next_node = next_node.next;
        }
        // should be on the last entry in the list
        return last_value;
    }

    removeBack() {
        // if the list is empty return null
        if (this.head == null) {
            return null;
        }

        // if the head is the only entry in the list
        if (this.head.next == null) {
            return null;
        }

        var previous_node = this.head;
        var next_node = this.head.next;
        while(next_node.next != null) {
            previous_node = next_node;
            next_node = next_node.next;
        }
        // next node is null, so this is the last node
        previous_node.next = null

        return this.Display();
    }

    addBack(value) {
        var new_node = new Node(value);
        // if the list is empty, make this the head and return the list
        if (this.head == null) {
            this.head = new_node;
            return this.Display();
        }

        var current_node = this.head;
        while (current_node.next != null) {
            current_node = current_node.next;
        }

        // we should be on the last node
        current_node.next = new_node;

        return this.Display();
    }
}

let myList = new SLL();

myList.addNode(87);

let myArray = [18,31,4,8,41,52,351,17,71,82,95,107,108,19,24,779,204,16,12,1021,256,721,891];
for (i = 0; i < myArray.length; i++) {
    myNode = myList.addNode(myArray[i]);
}

let myValue = 121;
console.log("List contains " + myValue + " = " + myList.contains(myValue));

console.log("Node Count = " + myList.NodeCount());

console.log(myList.Display());

console.log("Minimum value in list = " + myList.min());

console.log("Maximum value in list = " + myList.max());

console.log("Average of values in the list = " + myList.average());

console.log("Last value in the list = " + myList.back());

console.log("List after the last entry is removed = " + myList.removeBack());

console.log("List with the new node = " + myList.addBack(25778));