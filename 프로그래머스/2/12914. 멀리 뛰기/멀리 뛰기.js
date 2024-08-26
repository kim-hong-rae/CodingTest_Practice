function solution(n) {
    let a = 0;
    let b = 1;
    let result = 1;
    for(let i=1; i<=n; i++){
       result = (a + b) % 1234567;
        a = b;
        b = result;
    }
    
    return result;
}