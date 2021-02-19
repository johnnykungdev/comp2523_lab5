import ISortable from './interface/ISortable'

class SortUtil {
    data: ISortable
    constructor(data: ISortable) {
        this.data = data
    }
    sort(): void {
        let iterateTimes = this.data.length - 1
        let isSorted = false
        while(!isSorted) {
            isSorted = true
            for(let i = 0; i < iterateTimes; i++) {
                // console.log(this.data.compare(i, i+1))
                if(!this.data.compare(i, i+1)) {
                    this.data.swap(i, i+1)
                    isSorted = false
                }
            }
            iterateTimes--
        }
    }
}


export default SortUtil