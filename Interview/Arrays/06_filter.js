let arr = [1, 2, 3, 4, 5, 6];
//Remove all the elements which are <2;
arr = arr.filter((elem) => elem > 2);
console.log(arr)

arr = arr.filter((elem) => {
    return elem > 5
})
console.log(arr)


let name = ["RAJ", "SMIT", "ROHAN", "VIVEK", "TEJA"];
const new_name = name.filter((elem) => {
    return elem.length > 3;
})
console.log(new_name)