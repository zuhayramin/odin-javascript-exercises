const convertToCelsius = function (temp) {
    let celsiusTemp = (temp - 32) / (9 / 5)
    return Math.round(celsiusTemp * 10, 1) / 10
}

const convertToFahrenheit = function (temp) {
    let fahrenheitTemp = temp * (9 / 5) + 32
    return Math.round(fahrenheitTemp * 10, 1) / 10
}

console.log(convertToFahrenheit(73.2))

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
}
