function solution(cards1, cards2, goal) {
    let answer = '';
    let goal_length = goal.length;
    for(let i = 0; i<goal_length; i++){
        if(goal[0] === cards1[0]){
            cards1.shift();
            goal.shift()
        }
        else if(goal[0] === cards2[0]){
            cards2.shift();
            goal.shift();
        }
       
    }
    
    answer = goal.length === 0 ? "Yes" : "No"
   
    return answer;
}