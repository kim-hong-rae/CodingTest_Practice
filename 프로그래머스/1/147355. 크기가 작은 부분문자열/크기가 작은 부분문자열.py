def solution(t, p):
    answer = 0  
    a = len(p)
    for i in range(0, len(t)):
        if(int(t[i:i+a]) <= int(p) and len(p) == len(t[i:i+a])):
            answer = answer+1
    
    return answer