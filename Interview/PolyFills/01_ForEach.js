const arr = [1, 2, 3, 4, 5, 6];
if (!Array.prototype.myforEach) {
    Array.prototype.myforEach = function (userFn) {
        for (let i = 0; i < this.length; i++) {
            userFn(this[i], i);
        }
    }
}
arr.myforEach((value, index) => {
    console.log(`Value at index ${index} is ${value}`);
})

