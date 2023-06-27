const { nums, words } = require("./data/data.js");

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor (head = null) {
    this.head = head
  }
  insert (data) {
    this.data = data
    if (!this.head) {
      this.head = new Node(this.data);
      return this.head;
    }
    let currentNode = this.head;

    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(this.data);
  }
  size () {
    let length = 0;
    let currentNode = this.head;
    while(currentNode){
      length++
      currentNode = currentNode.next;
    }
    return length;
  }
  delete (key) {
    let temp = this.head;
    let currentNode = this.head;
    while(currentNode.next){
      if (currentNode.data === key) {
        if (currentNode === this.head) {
           this.head = this.head.next;
           currentNode = currentNode.next
        } else {
          temp.next = currentNode.next;
          currentNode = currentNode.next;
        }
        return this.head
      } else {
        temp = currentNode
        currentNode = currentNode.next;
      }
    }
  }
  getFirst () {
    return this.head
  }
  getLast () {
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    return currentNode
  }
  search (key) {
    let currentNode = this.head;
    while(currentNode.next){
      if (currentNode.data === key) {
        return currentNode
      }
      currentNode = currentNode.next;
    }
  }
  getKth (kth) {
    let currentNode = this.head;
    let index = -1; 
    while(currentNode){
      index++
      if (kth === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
  getKthToLast (kth) {
    let currentNode = this.head;
    let index = -1; 
    while(currentNode){
      index++
      if (this.size() - kth === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }
  isEmpty () {
   if (this.size()) {
    return true;
   } else {
    return false;
   }
  }
  clear () {

  }
  toArray () {

  }
  containsDuplicates () {

  }
}

let numList = new LinkedList();
for (let num of nums) {
  numList.insert(num);
}
wordList = new LinkedList();
for (let word of words) {
  wordList.insert(word);
}
console.log(numList.getKthToLast(1))

// numList.delete(2);
// console.log(numList)
// console.log(nums,numList.head)


module.exports = {
  Node,
  LinkedList,
};
