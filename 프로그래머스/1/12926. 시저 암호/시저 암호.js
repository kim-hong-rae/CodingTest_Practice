function solution(s, n) {
    let answer = '';
    for(let i = 0; i < s.length; i++){
        let sAscii = s.charCodeAt(i);
        if(sAscii >= 65 && sAscii <= 90){
            sAscii += n;
            if(sAscii > 90){
                sAscii -= 26;
            }
        } else if(sAscii >= 97 && sAscii <= 122){
            sAscii += n;
            if(sAscii > 122){
                sAscii -= 26;
            }
        }
        answer += String.fromCharCode(sAscii);
    }
    
    return answer;
}
