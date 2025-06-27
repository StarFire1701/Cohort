// console.log("Let's start studying objects in JS")
let name
// console.log(typeof(name))

// let age=null
// console.log(typeof(age))

// console.log((name > 1))
// console.log((name > 0))
// console.log((name >= 0))
// console.log((name < 0))4

// console.log(Math.abs(-2))

// const min=10
// const max=20
// console.log(Math.floor((Math.random()*(max-min+1))+min))

const myArray = [1,2,3,4,5]
// console.log(typeof(myArray))

const myArray2 = new Array(1,2,3,4,5,6,7)
myArray2.push(8)
myArray2.pop()
myArray2.pop()
myArray2.unshift(9)
myArray2.shift()

// let result = myArray2.join()
// console.log(myArray2)
// console.log(typeof(result))

// myArray2.push(myArray)
let result=myArray2.concat(myArray)
// console.log(result)

//for unique elements only
result = [... new Set(myArray2.concat(myArray))]
// console.log(result)

// let temp=Array.from("Raj")
// let temp2=Array.from({name:"Raj"})
// console.log(temp2)




//From here we start with objects

let myobj1 ={
    name:"Raj",
    age: 22,
    likes: "gym",
    has_gf: false,
    had_gf: false,
    had_crush: "infinity",
    clg_life: {
        friend_name: "Krisha",
        age: 20,
        likes: "Kdrama",
    }
};
// console.log(typeof(myobj1.name)) // interesting
// console.log(myobj1.clg_life)
// console.log(typeof(myobj1.clg_life)) // interesting
Object.freeze(myobj1)
myobj1.has_gf=true
console.log(myobj1)



