import ISortable from '../interface/ISortable'

class NumberGroup implements ISortable {
    data: number[]
    constructor(data: number[]) {
        this.data = data
    }

    get length(): number {
        return this.data.length
    }

    compare(leftPos, RightPos) {
        let leftSide = this.data[leftPos],
            rightSide = this.data[RightPos]
        if (leftSide > rightSide) {
            return false
        } else {
            return true
        }
    }
    swap(leftPos, rightPos) {
        let tempLeft = this.data[leftPos]
        this.data[leftPos] = this.data[rightPos]
        this.data[rightPos] = tempLeft
    }
}

export default NumberGroup