def solution(n):
    answer = n+1
    while True:
        if(bin(answer).count('1') == bin(n).count('1')):
            return answer
        else :
            answer = answer+1
    