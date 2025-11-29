const obj = {
    fname: "RAJ",
    lname: "PATEL",
    age: 22,
    getname: function () {
        console.log(`Hello my name is ${this.fname}`);
    }
}
obj.getname();
