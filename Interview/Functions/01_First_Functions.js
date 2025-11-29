function applyoperation(a, b, operation) {
    return operation(a, b);
}

const result = applyoperation(5, 20, (x, y) => y / x);
console.log(result)

