import ISortable from '../interface/ISortable'

class Node {
    next: Node | null = null
    data: number
    constructor(data: number) {
        this.data = data
    }
}

class LinkedListGroup implements ISortable {
    head: Node | null = null
    
    //Create Node out of data and attach to end of list
    add(data: number): void {
        const node = new Node(data)
        if(!this.head) {
            this.head = node
            return
        }

        let tail = this.head
        while(tail.next) {
            tail = tail.next
        }
        tail.next = node
    }

    get length(): number {
        let counter = 0, currentNode: Node | null = this.head
        while(currentNode) {
            counter++
            currentNode = currentNode.next
        }
        return counter
    }

    at(index: number): Node {
        if (!this.head) {
            throw new Error('Error: Index out of bounds')
        }
        let counter = 0
        let node: Node | null = this.head
        while(node) {
            if(counter === index) {
                return node
            } 
            counter++
            node = node.next
        }
        throw new Error('Error: Index out of bounds')
    }

    compare(leftPos: number, rightPos: number): boolean {
        if (!this.at(leftPos).next) return true
        if (this.at(leftPos).data > this.at(rightPos).data) {
            return false
        }
        return true
    }

    swap(leftPos: number, rightPos: number): void {
        // ...... node 13, node 14, node 15, node 16
        // ....... node 13.next -> node 15, node 15.next -> node 14, node 14.next -> node 16.
        let tempLeft = this.at(leftPos).data
        this.at(leftPos).data = this.at(rightPos).data
        this.at(rightPos).data = tempLeft
    }
    print(): void {
        if(!this.head) {
            return
        }
        let node: Node | null = this.head
        while(node) {
            console.log(node.data)
            node = node.next
        }
    }
}

export default LinkedListGroup