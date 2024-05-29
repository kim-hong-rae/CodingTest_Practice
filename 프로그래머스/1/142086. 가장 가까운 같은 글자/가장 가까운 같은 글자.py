def solution(s):
    answer = []
    alp = {}
    for index,char in enumerate(s):
        if char not in alp :
            answer.append(-1)
        else :
            answer.append(index-alp[char])
        
        alp[char] = index
        
        
    return answer