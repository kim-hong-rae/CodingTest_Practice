function solution(food) {
    let answer = [];
    let str = '';
    for(let i = 1; i<food.length; i++){
        if(food[i] % 2 === 1){
            food[i] -= 1;
        }
    }

    for(let i = 1; i<food.length; i++){
       answer.push(...Array(food[i] / 2).fill(i)); 
    }
    answer.push(0);
    
    for(let i = answer.length-2; i>=0; i--){
        answer.push(answer[i])
    }
    
    for(let i = 0; i<answer.length; i++){
        str += answer[i]
    }
    
    
    return str;
}