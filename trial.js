// class Rec {
//     constructor(height) {
//         this.height = height
//     }
// }

// const newRect = new Rec(132)
// console.log(newRect.height)

const rrr =  [1, 2, 3, 4, 5, 6]
let firstOne = rrr[0]
rrr[0] = 10
rrr[0] = rrr[1]
rrr[1] = firstOne
console.log(rrr)