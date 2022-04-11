import {Node} from './LinkedLists.js';
import {List} from './LinkedLists.js';
import {LList} from './LinkedLists.js';

function secondToLastValue(LList) {
    // return the second to last node in the linked list
    console.log(`number of nodes = ${LList.Length()}`);
    if (LList.Length() < 2) {
        return "Linked List must have at least 2 entries."
    }
    var runner = LList.head;
    while (runner.next.next != null) {
        runner = runner.next;
    }
    // we should be at the next to the last entry
    return runner;
}

var Node1 = new Node(88);
var List1 = new LList(Node1, 'List1').add(71).print(); //.add(66).add(4).add(102).add(44).add(702).add(828).add('end').print();

//console.log(secondToLastValue(List1));
var List2 = List1.copy('List2');
List2.print();
console.log(List2.Length());