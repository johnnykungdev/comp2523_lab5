import CharacterGroup from "./group/characterGroup";
import NumberGroup from "./group/numberGroup";
import LinkedListGroup from "./group/LinkedListGroup";
import ISortable from './interface/ISortable';

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


// const numberGroup = new NumberGroup([30, 3, -15, 0]);
// const sorter1 = new SortUtil(numberGroup);
// sorter1.sort();
// console.log(numberGroup.data)
// console.log("--------------------------------------")


// const characterGroup = new CharacterGroup("XaeybAC");
// const sorter2 = new SortUtil(characterGroup);
// sorter2.sort();
// console.log(characterGroup.data)
// console.log("--------------------------------------")

const linkedListGroup = new LinkedListGroup();
linkedListGroup.add(520);
linkedListGroup.add(-10);
linkedListGroup.add(-7);
linkedListGroup.add(4);

const sorter3 = new SortUtil(linkedListGroup);
sorter3.sort();
console.log(linkedListGroup)
linkedListGroup.print();