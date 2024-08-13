function solution(prices) {
    let answer = [];
    for(let i = 0; i< prices.length; i++){
        let flag = false;
        for(let j=i+1; j<prices.length; j++){
            if(prices[i] > prices[j]){
                answer.push(j-i);  
                flag = true;
                break;
            }
        }
        if(!flag)
           answer.push(prices.length - (i+1));
    }
    return answer;
}