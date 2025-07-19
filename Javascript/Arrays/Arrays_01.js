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
nums.forEach((value,index)=>{
    console.log(`Value at ${index} is ${value}`)
})