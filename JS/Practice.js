//Problem: Create an array containing different types of teas

let teas = ["Green tea","Black tea","Oolong tea","White tea","Herbal tea"]
// console.log(teas);

//Problem: Add "Chamomile Tea"to the existing list of teas
teas.push("Chaomomile Tea")

//Problem: Remove "Oolong Tea" from the list of teas
// teas=teas.filter(item => item!="Oolong tea")
// console.log(teas)

//Problem: Filter the list to only include teas that are caffeinated
const caffeinated=teas.filter(tea => tea!="Herbal tea")
// console.log(caffeinated)

//Problem: FIlter the list to only include teas that are caffeinated.
// console.log(teas.sort())

//Problem: Use a for loop to print each type of tea in the array
// teas.forEach(function(it){
//     console.log(it)
// })

//Problem: Use a for loop to count how many teas are caffeinated 
// let count=0;
// for(let i=0;i<caffeinated.length;i++){
//     count=count+1;
// }
// console.log(count)

//Problem: Use a for loop to create a new arrat with all tea names in uppercase
// const uppercaseTeas=[]
// for(let i=0;i<teas.length;i++){
//     uppercaseTeas.push(teas[i].toUpperCase())
// }
// console.log(uppercaseTeas)


//Problem: Use a for loop to find the tea name with the most characters.
// let longestTea=""
// for(let i = 0 ;i < teas.length; i++){
//     if(teas[i].length > longestTea.length){
//         longestTea = teas[i]
//     }
// }

//Problem: Use a for loop to reverse the order of teas in the array
const reversedArray=[]
for(let i = teas.length -1;i>=0;i--){
    reversedArray.push(teas[i])
}
console.log(reversedArray)
