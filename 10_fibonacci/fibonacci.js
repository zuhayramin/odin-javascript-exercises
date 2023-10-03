const fibonacci = function (num) {
    num = parseInt(num)
    if (num <= 0) return "OOPS"
    let fibonacci = [1, 1, 2, 3, 5]

    if (num > 4) {
        for (let index = 4; index < num; index++) {
            fibonacci.push(fibonacci[index] + fibonacci[index - 1])
        }
        return fibonacci[num - 1]
    } else return fibonacci[num - 1]
}

console.log(fibonacci(6))
// Do not edit below this line
module.exports = fibonacci
