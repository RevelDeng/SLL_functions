class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        var new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this
        }
        else {
            new_node.next = this.head
            this.head = new_node
            return this
        }
    }
    front() {
        if (!this.head) {
            return null
        }
        else {
            return this.head.data
        }
    }
    removeFront() {
        if (!this.head) {
            return null
        }
        else {
            this.head = this.head.next
            return this.head
        }
    }
    contains(val) {
        var runner = this.head
        while (runner != null) {
            if (runner.data == val) {
                return true
            }
            runner = runner.next
        }
        return false
    }
    length() {
        var runner = this.head
        var length = 0
        while (runner != null) {
            length++
            runner = runner.next
        }
        return length
    }
    display() {
        var runner = this.head
        var list = ""
        while (runner != null) {
            list = list.concat("[" + runner.data + "]")
            runner = runner.next
        }
        return list
    }
}
function minFront(sll) {
    if (!sll.head || sll.head.next == null) {
        return
    }
    var runner = sll.head
    var min = sll.head
    var beforeMin = null
    while (runner.next != null) {
        if (runner.next.data < min.data) {
            min = runner.next
            beforeMin = runner
        }
        runner = runner.next
    }
    if (min.next) {
        beforeMin.next = min.next
    }
    else {
        beforeMin.next = null
    }
    min.next = sll.head
    sll.head = min
    return sll
}
function maxBack(sll) {
    if (!sll.head || sll.head.next == null) {
        return
    }
    var runner = sll.head
    var max = sll.head
    var beforeMax = null
    while (runner.next != null) {
        if (runner.next.data > max.data) {
            max = runner.next
            beforeMax = runner
        }
        runner = runner.next
    }
    if (max.next) {
        beforeMax.next = max.next
        runner.next = max
        max.next = null
    }
    return sll
}
new_list = new LinkedList()
new_list.addFront("more data")
new_list.addFront("data")
new_list.addFront("some data")
new_list.addFront("your data")
console.log(new_list.contains("no data"))
console.log(new_list.length())
console.log(new_list.display())
minFront(new_list)
console.log(new_list.display())
maxBack(new_list)
console.log(new_list.display())