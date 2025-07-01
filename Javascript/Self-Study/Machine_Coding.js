// In this repository we will try writing polyfills for some functions of array


if(!Array.prototype.myforEach)  {
Array.prototype.myforEach=function(userfn){
    const newuser=this
    for(let i=0;i<newuser.length;i++){
        userfn(this[i],i);
    }
}
}

if(!Array.prototype.mymap){
    Array.prototype.mymap = function(userfn){
        const res=[]
        for(let i=0;i<this.length;i++){
            const temp=userfn(this[i],i)
            res.push(temp)
        }
        return res
    }
}
const arr=[1,2,3];
// arr.myforEach((value,index) => {
//         console.log(`For my for each ${value} is the value at ${index}`)
// });


const arr2 = arr.mymap((e)=>{
    e*3
})

console.log(arr2)





