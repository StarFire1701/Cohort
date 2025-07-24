const colors =["red","blue","green","yellow"];
// console.log(colors)

colors.push("purple")
// console.log(colors)
//Despite being const we are able to add and delete elements from the array

colors.pop()
// console.log(colors)

// console.log(colors.length)

// colors.length=10
// console.log(colors)

// colors.reverse()
// console.log(colors)

// colors.forEach(function(index){
//    return  console.log(colors[index])
// })

const nums=[1,2,3,4,5,6,7]
// console.log(nums.length)
// nums.forEach(function(num){
//     return console.log(num)
// })

// Using call backs
// nums.forEach((value,index)=>{
//     console.log(`Value at ${index} is ${value}`)
// })

// let arr=[1,2,2,4,6,6,6]

// let arr=[1,2,2,4,6,6,6]
// let a=21
// console.log(Array.isArray(arr))
// console.log(Array.isArray(a))
let arr=[1,2,3,4,5,6,7,8,9]
//     =[0,1,2,3,4,5,6,7,8]
//     =[1,2,4,5,]

// const checkfunc=(currentvalue)=>{currentvalue>5}
arr.copyWithin(2,3,5)
console.log(arr)
console.log(arr.every(function(currentvalue){
    return currentvalue>5
}))