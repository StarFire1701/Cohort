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
console.log(typeof(myobj1.name)) // interesting
console.log(myobj1.clg_life)
console.log(typeof(myobj1.clg_life)) // interesting


// Freezing of key value
// Object.freeze(myobj1)
// myobj1.has_gf=true
// console.log(myobj1)

let myobj2 ={
    name:"Rohit",
    age: 21,
    likes: "cricket",
    has_gf: true,
    had_gf: true,
    had_crush: "yes",
    clg_life: {
        friend_name: "Saloni",
        age: 20,
        likes: "Beauty Parlour",
    }
};
// let obj3={myobj1,myobj2}
// console.log(obj3)  This creates problem as each object is treated as separate key value

// const obj3=Object.assign({},myobj1,myobj2)
// Here myobj2 has same properties with same name and hence it will override the properties of myobj1.Also it creates a shallow copy of objects.
// obj3.has_gf=false
// console.log(obj3)
// console.log(myobj2)
//This does not affect as we trying to modify primitives. Primitives dont get affected it is the non primitves that only get affected.


// const obj3={...myobj1,...myobj2}
// console.log(obj3)// This also overrides in case of same values.

console.log(Object.keys(myobj1)) // Returns a 1D array
console.log(Object.values(myobj1)) // Returns a 1D array
console.log(Object.entries(myobj1)) //  Basically returns a 2D array with 1D array for every single value, Like [['name','Raj'],['age',22]]
// console.log(Object.hasOwn(myobj1,'name'))

//Object Destructuring

let tempobj = {
    language:"Javascript",
    course: "Chai-aur-code Cohort",
    course_instructor: "Hitesh Sir and Piyush Sir"
};

const{language:programming_lang}=tempobj
console.log(programming_lang)

// function loginusermessage(username){
//     return `${username} just logged in`
// }
// console.log(loginusermessage()) So it is important to pass arguments otherwise this will give undefined just logged in.








