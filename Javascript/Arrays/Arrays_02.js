// const arr=[1,2,3,4,5,[6,[7,8]],9,10]
// console.log(arr.flat())
 
let arr=["Raj","Smit","Vivek","Abhay","Meet","Veer","Teja","Tirth"]
// arr.forEach((element,index)=>{
//    console.log(`At index ${index} Element is ${element}`) 
// })
// console.log(arr.includes("Smit",2))

// let arr2=[1,1,1,3,4,2,4,5,3,2,5,6,1]
// console.log(arr2.indexOf(3))

// const arr3=["Raj","Patel"]
// let st=arr3.join()
// console.log(st)
// console.log(typeof(st))

// let arr2=[1,1,2,3,4,5]
// const iterator=arr2.keys()
// for(const key of iterator){
//     console.log(key)
// }


// let arr2=[1,1,1,3,4,2,4,5,3,2,5,6,1]
// console.log(arr2.lastIndexOf(1))

// const newarr2=arr2.map((elem)=>elem*2)
// console.log(arr2)
// console.log(newarr2)
// arr2[0]=99
// console.log(arr2)
// console.log(newarr2)

// let newarr2=arr2.map((elem,index)=>{
//     if(index<3){
//         return elem
//     }
// })
// console.log(newarr2)


// let arr2=[1,1,1,3,4,2,4,5,3,2,5,6,1]
// const initialvalue=10
// // console.log(arr2.reduce((accumulator,currentvalue)=>accumulator+currentvalue,initialvalue))
// // arr2.reduce((accumulator,currentvalue)=>{
// //     console.log(`Value of accumulator is ${accumulator} and its current value is ${currentvalue}`)
// //    return accumulator+currentvalue
// // },initialvalue)
// arr2.reduceRight((accumulator,currentvalue)=>{
//     console.log(`Value of accumulator is ${accumulator} and its current value is ${currentvalue}`)
//    return accumulator+currentvalue
// },initialvalue)


// const newarr=["Raj","Rahul","Smit","Dev","Shubham","Meet"]
// let reversedarr=newarr.reverse()
// newarr[0]="Rrraj"
// console.log(reversedarr)

// //Matlab reverse is a pass by reference

// const removeditem=newarr.shift()
// console.log(removeditem)
// console.log(newarr)

// console.log(newarr.some((elem)=>elem==="Raj"))



// ----------SORTING------------------

// function comparator(a,b){
//     return a-b
// }
// const arrnums=[1,2,3,4,9,80]
// console.log(arrnums.sort(comparator))


//Splice Method

// let namesarr=["Abhay","BabuBro","Hini"]
// namesarr.splice(2,0,"Smit")
// console.log(namesarr)


// let newnames=namesarr.toReversed()
// console.log(namesarr)
// console.log(newnames)

let number=1234567.89
// console.log(number.toLocaleString())
// console.log(number.toLocaleString('en-US'))
// console.log(number.toLocaleString('de-DE'))
// console.log(number.toLocaleString('hi-IN'))

// console.log(number.toLocaleString('en-US',{
//     style:'currency',
//     currency:'USD'
// }));
// console.log(number.toLocaleString('hi-IN',{
//     style:'currency',
//     currency:'INR'
// }));


//For dates
// let date=new Date()
// console.log(date.toLocaleString())
// console.log(date.toLocaleString('en-GB'))
// console.log(date.toLocaleString('en-US'))
// console.log(date.toLocaleString('en-IN',{
//     timezone:'Asia/Kolkata'
// }))

// Truthy and Falsy Values

function checktruthy(value){
    if(value){
        console.log("Truthy Value")
    }
    else{
        console.log("Falsy Value")
    }
}
checktruthy(1)  
checktruthy(0)  
checktruthy(null)  
checktruthy(undefined)  
checktruthy("Raj")  
checktruthy(["Raj","Patel"])  
checktruthy([])  
// checktruthy({})  