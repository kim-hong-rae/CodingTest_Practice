function isValid(s) {
    let stack = [];
    
    for(let i = 0; i<s.length; i++){
        let char=s[i]
        if(char === '(' || char === '[' || char === '{'){
            stack.push(s[i]);
        }
        else {
            if (stack.length === 0) return false;
            let top = stack[stack.length - 1];
            if ((char === ')' && top === '(') || 
                (char === ']' && top === '[') || 
                (char === '}' && top === '{')) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function solution(s) {
    let answer = 0;
    let arr = s.split('')
    for(let i =0; i<arr.length; i++) {
        if(isValid(arr.join(''))){
            answer ++;
        }
        let firstChar = arr.shift();
        arr.push(firstChar);
    }
    return answer;
}