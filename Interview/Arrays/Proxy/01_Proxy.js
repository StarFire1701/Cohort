function negativeIndex(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop);
            if (index < 0) {
                return target[arr.length + index];
            }
            return arr.length;
        },
        set(target, prop, value) {

        }
    })
}
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const proxied_arr = negativeIndex(arr1);
console.log(proxied_arr[-1])