let makeGuess = function(guess){
    let min = 1
    let max = 5
    let randomOutput = Math.floor(Math.random()*(max - min + 1)) + min
   
    return guess === randomOutput
}

console.log(makeGuess(1))