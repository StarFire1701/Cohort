// bind() is a method available on every function in JavaScript.

// It allows you to:

// 1. Explicitly set the value of this inside a function
// 2. Pass arguments one by one
// 3. Can be called anytime

function introduction(city, age) {
    console.log(`Hi, my name is ${this.name} and I am from ${city} and my age is ${age}`)
}

const obj = {
    name: "Raj",
    lname: "Patel"
}

const my_method = introduction.bind(obj, "Valsad", 22);
// my_method();

// You can use call to borrow methods
const obj1 = {
    numbers: [1, 2, 3],
    print() {
        console.log(this.numbers)
    }
}
const obj2 = {
    numbers: [4, 5, 6]
}
obj1.print.apply(obj2);