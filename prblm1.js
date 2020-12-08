let arr = [1,2,3,4,5,6];
let clone = (arr) => {
    let copycat = arr.map((c) => {
        return c;
    } )
    return copycat;
}
console.log("Original Array is : " + arr);
console.log("Clone Array is    : " + clone(arr));