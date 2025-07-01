// In this repository we will try writing polyfills for some functions of array


if(!Array.prototype.myforEach)  {
Array.prototype.myforEach=function(userfn){
    const newuser=this
    for(let i=0;i<newuser.length;i++){
        userfn(this[i],i);
    }
}
}
const arr=[1,2,3];
arr.myforEach((value,index) => {
        console.log(`For my for each ${value} is the value at ${index}`)
});




