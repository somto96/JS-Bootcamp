let fahrenheitToCelsius = function(fahrenheit){
    let converter = (fahrenheit - 32) * 5/9
    return converter
}

let newTempA = fahrenheitToCelsius(32)
let newTempB = fahrenheitToCelsius(68)

console.log(newTempA)
console.log(newTempB)
