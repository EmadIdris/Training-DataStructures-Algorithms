'use strict';

let Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        // add a new node with 'value to the end of the linkedList
        // Make a new node with the value from the arg
        const newNode = new Node(value);

        // cover edge case where list is empty
        if (!this.head) { // if no head
            //make head
            this.head = newNode; // set the list's head to this node 
            return; // that's all this node is now the lish's head
        }
        // Traverse the list untill 'next === null' is found
        let currentNode = this.head
        while (currentNode.next !== null) {
            currentNode = currentNode.next
        }
        // when it is found point next to the new node
        currentNode.next = newNode
    }
    insertBefore(value, newVal) {
        // Add a new node with 'newVal
        // make a new node with newVal from the argument
        const node = new Node(newVal);
        //cover eage case if the list is empty
        if (!this.head) {
            const error = new Error('Can not search an empty linked list.')
            return error;
        }
        // Start at the head for our while loop.
        let currentNode = this.head;

        while (currentNode !== null) { // Until the end of the list...
            if (this.head.value === value) { // If currentNode is the head...
                this.insert(newVal); // ...make our node the head instead
                break;
            }
            if (currentNode.next.value === value) { // Search for value in the next node
                node.next = currentNode.next; // When found, set our node's next to it's next.
                currentNode.next = node; // Set it's next to our node...
                break; // ...and leave the while loop.
            } else { // Value not found, let's move on...
                currentNode = currentNode.next; // Set currentNode to the next node and restart loop
            }
        }
        // Finally, if currentNode is null
        if (!currentNode) {
            return new Error('Value not found in list.');
        }
    }

    insertAfter(value, newVal) {
        // Add a new node with `newVal` immediately after the first node containing `value`

        // Make a new node with the newVal from the argument
        const node = new Node(newVal);
        // Cover edge case where list is empty.
        if (!this.head) { // If the list has no head (it was just created) then...
            const error = new Error('Can not search an empty linked list.'); // There is nothing to search for
            return error; // Return the error to the user
        }
        // Traverse the list 'next === value' is found.
        let currentNode = this.head; // Start at the head

        while (currentNode !== null) { // Until the end of the list...
            if (currentNode.next === null) { // If currentNode is the tail...
                this.append(newVal); // ...make our node the tail instead
                break;
            }
            if (currentNode.value === value) { // Search for value in the next node
                node.next = currentNode.next; // When found, set our node's next to it's next.
                currentNode.next = node; // Set it's next to our node...
                break; // ...and leave the while loop.
            } else { // Value not found, let's move on...
                currentNode = currentNode.next; // Set currentNode to the next node and restart loop
            }
        }
        // Finally, if currentNode is null
        if (!currentNode) {
            return new Error('Value not found in list.');
        }
    }
    insert(value) {
        // Take a 'value' and adds a new node with that value to the head of the list

        // Make a new node with the value from the argument
        const node = new Node(value);
        // Make the new Node's next point at the current head
        node.next = this.head;
        // Reassign head to the new Node.
        this.head = node;
        return;
    }
    includes(testValue) {
        // Take a 'testValue' and returns a boolean showing if that value exists in the list

        if (!this.head) { // If there's no head then we're done before we start.
            return false;
        }
        // Start at the head for our while loop.
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === testValue) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return false;
    }
    toString() {
        // Returns a string representing all values in the linked list
        // Like: "{a} -> {b} -> {c} -> null"

        let arrayString = '';
        let currentNode = this.head;

        if (!this.head) {
            return `NULL`;
        } else {
            arrayString = `{${this.head.value}} -> `;
        }

        // Traverse the linked list and concat the values.
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
            arrayString += `{${currentNode.value}} -> `;
        }
        arrayString += `NULL`;

        return arrayString;
    }
}

module.exports = LinkedList;
