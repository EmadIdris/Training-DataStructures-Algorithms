'use strict';

const LinkedList = require('./LinkedList')

function doWork() {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insert(5);
    //---------------------------------------------------------------------------------------includes/toString
    console.log(linkedList.includes(2));
    console.log(linkedList.includes(8));
    console.log(linkedList.toString());
    //---------------------------------------------------------------------------------------includes/toString
    const linkedList2 = new LinkedList();
    console.log(linkedList2.includes(2));
    console.log(linkedList2.toString());
}
//--------------------------------------------------------------------------------------- Hello I'm Emad Idris
module.exports = doWork;
