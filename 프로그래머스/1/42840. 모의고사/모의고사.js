function solution(answers) {
    let answer = []
    let firstPattern = [1,2,3,4,5];
    let secondPattern=[2,1,2,3,2,4,2,5];
    let thirdPattern = [3,3,1,1,2,2,4,4,5,5];
    
    let scores = [0,0,0];
    
    for(let i = 0; i<answers.length; i++) {
        if(answers[i] === firstPattern[i % firstPattern.length]){
            scores[0]++
        }
        if(answers[i] === secondPattern[i % secondPattern.length]){
            scores[1]++
        }
        if(answers[i] === thirdPattern[i % thirdPattern.length]){
            scores[2]++
        }
    }
    
    let maxScore = Math.max(...scores);
    for(let i = 0; i<scores.length; i++){
        if(maxScore === scores[i])
            answer.push(i+1)
    }
    return answer;
}