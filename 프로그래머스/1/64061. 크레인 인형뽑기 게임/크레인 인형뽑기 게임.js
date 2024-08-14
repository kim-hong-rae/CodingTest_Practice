function solution(board, moves) {
    let answer = 0;
    let box = [];
    let arrs = [...Array(board[0].length)].map(()=>[])
    for(let i=board.length-1; i>=0; i--){
        for(let j = 0; j< board[0].length;  j++){
            if(board[i][j]){
                arrs[j].push(board[i][j]);
            }
        }
    }
 
    for(let i = 0; i<moves.length; i++){
        let move = moves[i]-1;
        if(arrs[move].length !== 0){
            let item = arrs[move].pop()
             if(box.length > 0 && box[box.length-1] === item){
                box.pop();
                answer += 2;   
            }
            else{
            box.push(item)
            }
           
        }

     }
    console.log(box)
    return answer;
}