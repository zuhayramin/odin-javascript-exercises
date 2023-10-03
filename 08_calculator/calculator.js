const add = function (a, b) {
    return a + b
}

const subtract = function (a, b) {
    return a - b
}

const sum = function (numbers) {
    return numbers.reduce((total, num) => total + num, 0)
}

const multiply = function (numbers) {
    return numbers.reduce((total, num) => total * num, 1)
}

const power = function (a, b) {
    return Math.pow(a, b)
}

const factorial = function (number) {
    if (number === 0) return 1
    let total = 1
    for (let index = 1; index <= number; index++) {
        total *= index
    }
    return total
}
// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
}
