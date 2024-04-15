import math

def solution(brown, yellow):
    n = int(math.sqrt(yellow))
    for i in range(n, 0, -1) :
        if yellow % i ==0 :
            j = yellow // i
            if(j+2)*(i+2) == brown+yellow :
                return [j+2, i+2]
    
    
    