let gradeCalc = function(studentScore, totalScore = 100){
    let scorePercent = (studentScore/totalScore) * 100
    if (scorePercent >= 90 && scorePercent <= 100){
        console.log(`You have an A (${scorePercent}%)`)
    }else if(scorePercent >= 80 && scorePercent <= 89){
        console.log(`You have a B (${scorePercent}%)`)
    }else if(scorePercent >= 70 && scorePercent <= 79){
        console.log(`You have a C (${scorePercent}%)`)
    }else if (scorePercent >= 60 && scorePercent <= 69){
        console.log(`You have a D (${scorePercent}%)`)
    }else if (scorePercent <= 59){
        console.log(`You Failed (${scorePercent}%)`)
    }
    
    return scorePercent
}

let myScore = gradeCalc(15, 20)
// console.log(myScore)