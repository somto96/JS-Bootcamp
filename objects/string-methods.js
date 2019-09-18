let isValid = function(string){
    if (string.length >= 8 && !string.includes('password')){
        return true
    }else{
        return false
    }
}

console.log(isValid('asdfp'))
console.log(isValid('asdfp12345%^^$$#'))
console.log(isValid('asdfppoiehpassword'))