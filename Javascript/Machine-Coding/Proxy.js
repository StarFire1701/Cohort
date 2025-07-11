let arr=[1,2,3,4,5,6,7,8,9,10]

function negativeindex(){
    return new Proxy(arr,{
        get(target,prop){
            const index=Number(prop)
            if(index<0){
                return target[target.length+index]
            }
            return target[index]
        }
    })
}

let newarr=negativeindex()
console.log(newarr[-1])