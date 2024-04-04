def solution(s):
    bin_count = 0
    zero_count = 0
    while s != '1' :
        before_len = len(s)
        s = s.replace('0','')
        zero_count += before_len - len(s)
        s = bin(len(s))[2:]
        bin_count +=1
    return [bin_count, zero_count]
    return answer