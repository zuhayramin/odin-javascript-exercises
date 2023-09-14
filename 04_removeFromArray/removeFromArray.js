const removeFromArray = function () {
    let list = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        let exclusionIndex = list.indexOf(arguments[i])
        if (list[exclusionIndex] === arguments[i]) {
            list.splice(exclusionIndex, 1)
        }
    }
    return list
}

console.log(removeFromArray([1, 2, 3, 4], "3", 4))
// Do not edit below this line
module.exports = removeFromArray
