interface ISortable {
    length: number,
    compare(leftPos: number, rightPos: number): boolean,
    swap(leftPos: number, rightPost: number): void
}

export default ISortable