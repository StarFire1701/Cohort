const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.sort();
console.log(arr);
// What if we want to sort in descending order

arr.sort((a, b) => b - a)
console.log(arr)