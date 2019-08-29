let getTip = function(total, tipPercent = 0.25){
    let tipValue = tipPercent * 100
    let tip = total * tipPercent
    return `A ${tipValue}% tip on $${total} would be $${tip}` 
}

let amountPaid = getTip(2000)
console.log(amountPaid)