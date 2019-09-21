let myAccount = {
    name: "Somto",
    income: 0,
    expense: 0
}

let addExpense = function (account, amount) {
    account.expense = account.expense + amount
    // console.log(account)
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
    // console.log(account)
}

let resetAccount = function (account) {
    account.income = 0
    account.expense = 0
}

let getAccountSummary = function (account) {
    return `${account.name}'s account has a balance of $${account.income - account.expense}.
     $${account.income} as income and $${account.expense} as expenses made`
}



// Testing functions

addIncome(myAccount, 20000)
addExpense(myAccount, 8000)
addExpense(myAccount, 8000)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
