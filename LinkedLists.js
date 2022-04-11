export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.listName = "";
        return this;
    }
    listName(value) {
        // let the node carry the list name it is associated with
        if (value != null) {
            this.listName = value
        }
        return this;
    }
}

export class LList {
    constructor(Node, name) {
        this.head = Node;
        this.head.listName = name;
        this.verbose = false;
        this.name = name;
        return this;
    }

    setVerbose(value) {
        if ((value != true) && (value != false)) {
            // don't know what we got but it's not a good value for verbose
            console.log(`${value} is an invalid value for verbose. verbose remains ${this.verbose}`);
            return this;
        }
        this.verbose = value;
        return this;
    }

    add(value) {
        var newNode = new Node(value);
        newNode.listName = this.name;
        if (this.head == null) {
            this.head = newNode;
            return this
        }
        
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        
        // got to the end of the list
        if (this.verbose == true) {
            console.log(`adding new node with value ${newNode.value}`);
        }
        runner.next = newNode;
        return this;
    }

    remove(value) {
        if (this.head == null) {
            return this;
        }

        var runner = this.head;
        if (this.head.value == value) {
            // we're deleting the head
            if (this.head.next != null) {
                var oldHead = this.head;
                this.head = this.head.next;
                oldHead = null;
            }
            // think this will work??
            return this;
        }

        // loop through and find the value
        var previousNode = runner;
        runner = runner.next;
        while (runner != null) {
            if (runner.value == value) {
                previousNode.next = runner.next;
                runner.next = null;
                runner = null
            }
        }
        // not sure if this will work right...
        return this;
    }

    Length() {
        if (this.head == null) {
            return 0;
        }

        var runner = this.head;
        var nodes = 1;  // count the head node
        while(runner.next != null) {
            if (this.verbose == true) {
                console.log(`got into runner.next loop ${runner.value}`);
            }
            nodes++;
            runner = runner.next;
            if (this.verbose == true) {
                console.log(`nodes = ${nodes}`);
            }
        }

        return nodes;
    }

    copy(name) {
        // copy this list to a new list. return the new list, not this one
        if (this.head == null) {
            // not copying an empty list, maybe that's what they want but that's just dumb
            return this
        }

        var newHead = new Node(this.head.value);
        newHead.listName = name;
        var newList = new LList(newHead,name);

        // copy all the entries
        var newNode = null;
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
            newNode = new Node(runner.value);
            newNode.listName = name;
            newList.add(newNode);
        }
        // should have copied everything
        return newList;
    }

    print() {
        // print out the linked list
        if (this.head == null) {
            return this;
        }

        var runner = this.head;
        while (runner != null) {
            console.log(runner);
            runner = runner.next;
        }

        return this;
    }
}

export class List {
    constructor(arr) {
        this.head = new Node(arr[0]);
        for (let k = 1; k < arr.length; k++) {
            let newNode = new Node(arr[k]);
            this.addNode(newNode);
        }
        return this;
    }

    buildFromArray(arr) {
        this.head = new Node(arr[0]);
        for (let k = 1; k < arr.length; k++) {
            let newNode = new Node(arr[k]);
            this.addNode(newNode);
        }
        return this;
    }

    addNode(node) {
        if (this.head == null) {
            console.log('addNode fell into head is null')
            this.head = node;
        }
        else {
            var currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            // should have last node now
            currentNode.next = node;
        }
        return this;
    }

    removeNode(value) {
        if (this.head == null) {
            return this;
        }
        
        var currentNode = this.head;
        var previousNode = null;
        while (currentNode.Next != null) {
            if (currentNode.value = value) {
                // found the one we are looking for
                if (currentNode = this.head) {
                    
                }
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return this;
    }

    split(value) {
        if (this.head == null) {
            return this;
        }
        var curNode = this.head;
        var bNewList = false;
        var List2 = new List();
        while (curNode != null) {
            if (curNode.value == value) {
                List2.head = curNode;
                return List2;
            }
            curNode = curNode.next;
        }
        return this;
    }

    concat(aList) {
        // if this is empty...
        if (this.head == null) {
            this.head = aList.head;
            return this;
        }
        // walk down to the end of the list
        var curNode = this.head;
        while(curNode.next != null) {
            curNode = curNode.next;
        }
        // got to the end of the list
        curNode.next = aList.head;
        return this;
    }

    partition(value) {
        if (this.head == null) {
            return this;
        }
        
        var tmpArray = [];
        var curNode = this.head;
        while (curNode != null) {
            tmpArray.push(curNode.value);
            curNode = curNode.next;
        }
        var newArray = tmpArray.sort(function(a,b) {return a-b});
        return new List(newArray);
    }

    removeNegatives() {
        if (this.head == null) {
            return this;
        }
        var curNode = this.head;
        // what if the head is negative????
        while (curNode.value < 0) {
            this.head = curNode.next;
        }
        // know we are on a positive, now get rid of the negative nodes
        while (curNode != null) {
            if (curNode.next.next == null) {
                // the next node is the last
                if (curNode.next.value < 0) {
                    curNode.next = null;
                }
            }
            else if (curNode.next.value < 0) {
                // don't want the next node
                curNode.next = curNode.next.next;
                // have to walk through until we find the next positive node
                var nextNode = curNode.next;
                while ((nextNode != null) && (nextNode.value < 0)) {
                    nextNode = nextNode.next;
                }
                // now we have a positive
                curNode.next = nextNode;
                //console.log(curNode);
            }
            curNode = curNode.next;
        }
        return this;
    }

    walkList() {
        if (this.head == null) {
            return 'the list is empty';
        }
        let curNode = this.head;
        let count = 0;
        let result = "";
        while (curNode != null) {
            count++;
            result = result + 'Node ' + count + '        value is ' + curNode.value + '\r\n';
            curNode = curNode.next;
        }
        return result;
    }

    walkBackList() {
        if (this.head == null) {
            return 'The list is empty';
        }
        let curNode = this.head;
        let backward = new Array;
        let result = "";
        while(curNode != null) {
            backward.push(curNode.value);
            curNode = curNode.next;
        }
        // now pop the entries off of the array
        for (let k = backward.length-1; k >= 0; k--) {
            result = result + "Node " + k + "   value = " + backward.pop() + "\r\n";
        }
        return result;
    }

    select(num) {
        if (this.head == null) {
            return 'The list is empty';
        }
        var k = 0;
        var curNode = this.head;
        while (curNode != null) {
            if (k == num) {
                console.log(curNode);
                return curNode;
            }
            curNode = curNode.next;
        }
    }

    minToFont() {
        if (this.head == null) {
            return "The list is empty"
        }
        var curNode = this.head;
        var minNode = this.head;
        var previousNode = this.head;
        var prevNode = this.head;

        while (curNode != null) {
            if (curNode.value < minNode.value) {
                prevNode = previousNode
                minNode = curNode;
            }
            previousNode = curNode;
            curNode = curNode.next;
        }
        console.log('minNode:');
        console.log(minNode);
        // minNode should have the minimum value
        prevNode.next = minNode.next;
        minNode.next = this.head;
        this.head = minNode;
        return this;
    }

    maxToBack() {
        if (this.head == null) {
            return "The list is empty"
        }
        var curNode = this.head;
        var maxNode = this.head;
        var prevNode = null;
        var previousNode = this.head;   // node before max node
        var nextNode = null;            // node after next node
        // read until you get to the last node in the list
        while (curNode != null) {
            if (curNode.value > maxNode.value){
                previousNode = prevNode;
                maxNode = curNode;
                nextNode = curNode.next;
            }
            prevNode = curNode
            curNode = curNode.next;
        }
        // curNode is the last node
        previousNode.next = maxNode.next;
        prevNode.next = maxNode;
        maxNode.next = null;
        return this;
    }

    prepend(value, before) {
        var newNode = new Node(value);
        var curNode = this.head;
        while (curNode.next != null) {
            if (curNode.next.value == before) {
                // next node is the one we want to prepend
                newNode.next = curNode.next;
                curNode.next = newNode;
                return this;
            }
            curNode = curNode.next;
        }
        // if we got here we never found the one we were looking for
        // put the new value at the end of the list
        curNode.next = newNode;
        newNode.next = null;
        return this;
    }

    append(value,after) {
        var newNode = new Node(value);
        var curNode = this.head;
        while (curNode.next != null) {
            if (curNode.value == value) {
                newNode.next = curNode.next;
                curNode.next = newNode;
                return this
            }
            curNode = curNode.next;
        }
        // got to the end and never found it.
        curNode.next = newNode;
        newNode.next = null;
        return this;
    }

    remove(value) {
        var curNode = this.head;
        var removeNode = null;
        while (curNode.next != null) {
            if (curNode.next.value == value) {
                // next node is the one we are looking for
                removeNode = curNode.next;
                curNode.next = curNode.next.next;
                removeNode.next = null;
                return this;
            }
            curNode = curNode.next;
        }
        // if we got here we never found it, just return the list
        return this;
    }

    push(value) {
        var newNode = new Node(value);
        if (this.head == null) {
            // list is empty
            this.head = newNode;
        }
        // have to find the last node
        var curNode = this.head;
        while (curNode.next != null) {
            curNode = curNode.next;
        }
        // should be at the last node
        curNode.next = newNode;
        }

    pop() {
        if (this.head == null) {
            // list is empty
            console.log('list is empty');
            return this;
        }
        // have to find the last node
        var curNode = this.head;
        var previousNode
        while (curNode.next != null) {
            previousNode = curNode;
            curNode = curNode.next;
        }
        // should be at the last node
        previousNode.next = null;
        return curNode;
    }

    count() {
        if (this.head == null) {
            //list is empty
            return 0;
        }
        var cnt = 0;
        var curNode = this.head;
        while (curNode != null) {
            cnt ++;
            curNode = curNode.next;
        }
        // counted all of the nodes
        return cnt;
    }

    print() {
        if (this.head == null) {
            return "The list is empty";
        }
        var curNode = this.head;
        var result = "";
        while (curNode != null) {
            result = result + curNode.value + "    " + curNode.next + '\r\n';
            //console.log(result);
            curNode = curNode.next;
        }
        console.log(result);
        return this;
    }
}

