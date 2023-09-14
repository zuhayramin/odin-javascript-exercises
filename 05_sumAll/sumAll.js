const sumAll = function (num1, num2) {
    let sum = 0
    let smallerNumber
    let largerNumber

    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    if (typeof num1 === "number" && typeof num2 === "number") {
        if (num1 < num2) {
            smallerNumber = num1
            largerNumber = num2
        } else if (num1 > num2) {
            smallerNumber = num2
            largerNumber = num1
        }

        for (let i = smallerNumber; i <= largerNumber; i++) {
            sum += i
        }
        return sum
    } else return "ERROR"
}

// Do not edit below this line
module.exports = sumAll
