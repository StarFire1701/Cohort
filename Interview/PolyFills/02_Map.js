const arr = [1, 2, 3, 4, 5, 6]
if (!Array.prototype.mymap) {
    Array.prototype.mymap = function (userFn) {
        let newarr = [];
        for (let i = 0; i < this.length; i++) {
            newarr.push(userFn(this[i]));
        }
        return newarr;
    }
}
const doubled_arr = arr.mymap((elem) => elem * 2);
console.log(doubled_arr)