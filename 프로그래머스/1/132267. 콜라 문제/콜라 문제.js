function solution(a, b, n) {
    let answer = 0;
    while(n >= a) {
        answer += Math.floor(n / a) * b;
        n = Math.floor(n/a) * b + ( n % a );
        console.log(answer)
    }
   
    return answer;
}