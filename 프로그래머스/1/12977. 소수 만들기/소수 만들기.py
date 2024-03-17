from itertools import combinations
import math

def solution(nums):
    combi = list(combinations(nums, 3)) 
    result = 0

    for c in combi: 
        comb_sum = sum(c)
        for k in range(2, int(math.sqrt(comb_sum)) + 1):
            if comb_sum % k == 0: 
                break
        else: 
            result += 1

    return result
