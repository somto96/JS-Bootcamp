let fahrenheit = {
    temp: 77
}

let tempConversion = function(fahrenheit){
    let celsius = (`${fahrenheit.temp}` - 32) * 5/9
    return {
        fahrenheit:`${fahrenheit.temp}`,
        celsius:  `${celsius}`,
        kelvin: celsius + 273.15
    }
}

let convertedTemp = tempConversion(fahrenheit)
console.log(convertedTemp)
// console.log(convertedTemp.celsius)
// console.log(convertedTemp.kelvin)