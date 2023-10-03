const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    let temp = str.split("").reverse().join("")
    return temp === str ? true : false
}
// Do not edit below this line
module.exports = palindromes
