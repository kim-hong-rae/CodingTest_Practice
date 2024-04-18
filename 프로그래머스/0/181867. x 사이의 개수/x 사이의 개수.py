def solution(myString):
    answer = []
    answer_string = myString.split('x')
    for i in range(len(answer_string)) :
        answer.append(len(answer_string[i]))
    
    return answer