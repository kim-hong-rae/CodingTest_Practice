def solution(s):
    answer = ''
    list_s = list(s.split(' '))
    
    for i in range(len(list_s)) : 
        list_s[i] = int(list_s[i])
        
    
    answer = answer+str(min(list_s))+' '+str(max(list_s))
    return answer
    
