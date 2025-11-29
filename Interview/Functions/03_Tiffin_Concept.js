function createcounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

let count1 = createcounter();
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());

