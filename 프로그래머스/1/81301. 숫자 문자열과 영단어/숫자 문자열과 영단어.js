function solution(s) {
    const numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    numbers.map((idx, number)=>
               s=s.replaceAll(idx, number))
    return Number(s);
}