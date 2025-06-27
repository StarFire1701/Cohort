// Maps
const map=new Map();
map.set('IN',"India")
map.set('FR',"France")
// For or loop gives output like this [ 'IN', 'India' ]
// [ 'FR', 'France' ]
// for(const temp of map){
//     console.log(temp)
// }

//To destructure it we can do it this way

for(const[key,value] of  map){
    console.log(key,"-",value)
}

// map.forEach((item)=>{
//     console.log(item)
// })



//  -----  Filters -------

const arr=[1,2,3,4,5,6,7,8,9,10]
// const newarr =arr.filter((nums)=>
//     nums>5
// )
// console.log(newarr)
// If we declare using {} then we explicitly need to return

// const newarr= arr.filter((num)=>{
//     return num>5
// })
// console.log(newarr)


// ------- Reduce

const temparr=[1,2,3]
// const mytotal = temparr.reduce(function(acc,curval){
//     console.log(acc,curval)
//     return acc+curval
// },0)

const mytotal = temparr.reduce((acc,curval)=>{
    // console.log(acc,curval)
    return acc+curval
})
console.log(mytotal)