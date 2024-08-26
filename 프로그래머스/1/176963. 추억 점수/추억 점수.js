function solution(name, yearning, photo) {
    var answer = [];
    for(let k=0; k<photo.length; k++){
        let result = 0;
        for(let i = 0; i<photo[k].length; i++){
            for(let j = 0; j<name.length; j++){
                if(photo[k][i] === name[j])
                    result += yearning[j]
            }
           
        }
         answer.push(result);
    }
    
    return answer;
}