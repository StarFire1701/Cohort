const arr = [1, 2, 3, 4, 5, 6, 7];

// Push method in array

arr.push(8);
console.log(arr);


// Pop the element from the array
const elem = arr.pop();
console.log(arr)
console.log(elem)

// .at (index) method

let index = 2;
console.log(`Element at ${index} is ${arr.at(index)}`)


// Reverse Method

arr.reverse()
console.log(arr)

let arr2 = arr.sort();
console.log(arr)
console.log(arr2)

arr2[0] = 55;
console.log(arr);
console.log(arr2);


//Shift Method is used to remove first element from the array;

const first_removed = arr.shift();
console.log(first_removed);
console.log(arr);

// Unshift element add to the beginning of the array

arr.unshift(1);
console.log(arr);
console.log(arr2);

const sliced = arr.slice(2);
console.log(sliced);

sliced[0] = 99;
console.log(sliced);
console.log(arr);


const arr3 = [[1, 2], 3, 4, 5, 6, 7];
const temp = arr3.slice();
// console.log(`Sliced array is ${temp}`);
// console.log(`Original array is ${arr3}`);

arr3[0][0] = 99;
console.log(`Sliced array is ${temp}`);
console.log(`Original array is ${arr3}`);


//Spliced
//Syntax is arr.slice(startindex, deletecount , item);

const arr_spliced = arr3.splice(2, 2);
console.log(arr_spliced);
console.log(arr3);

