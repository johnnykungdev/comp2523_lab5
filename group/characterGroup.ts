import ISortable from '../interface/ISortable'

class CharacterGroup {
    data: string
    cachedArray: Array<string>
    constructor(data: string) {
        this.cachedArray = data.split('')
        this.data = data
    }

    get length(): number {
        return this.data.length
    }

    compare(leftPos, rightPos) {
        let leftChar = this.cachedArray[leftPos].toLowerCase(),
            rightChar = this.cachedArray[rightPos].toLowerCase()
        if(leftChar > rightChar) {
            return false
        } else {
            return true
        }
    }

    swap(leftPos, rightPos) {
        let tempLeft = this.cachedArray[leftPos]
        this.cachedArray[leftPos] = this.cachedArray[rightPos]
        this.cachedArray[rightPos] = tempLeft
        this.data = this.cachedArray.join('')
    }
}

export default CharacterGroup

