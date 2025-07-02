const obj1={
    fname:"Raj",
    lname:"Patel",
    give_name:function(){
        return `${this.fname} ${this.lname}`
    }
};

const obj2={
    fname:"Rohit",
    lname:"Sharma",
    give_name:function(){
        return `${this.fname} ${this.lname}`
    }
};
console.log(obj1.give_name())
console.log(obj2.give_name())
// But here am I not violating DRY property ( Do not repet yourself property)