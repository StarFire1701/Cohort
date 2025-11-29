let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const spliced = arr.splice(2, 3);
console.log(arr);
console.log(spliced);

arr.splice(2, 0, 3, 4, 5);
console.log(arr);

// We can use splice method to clear the complete array
arr.splice(0);
console.log(arr);
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const str = arr.toString();
console.log(str)


// Concatenating an array
let arr2 = ["Raj", "Smit", "Vivek"];
let arr3 = arr.concat(arr2);
console.log(arr3);

// Fill the array with some value 

arr3.fill(0, 1);
console.log(arr3);

const found = arr.find((elem) => elem > 5);
console.log(found)



// Flat method
const arr4 = [0, 1, [2, [3, [4, 5]]]];
const temp = arr4.flat(Infinity);
console.log(temp);
