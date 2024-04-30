def solution(sizes):
    answer = 0
    num = 0
    max_wid = []
    max_hei = []
    for i in range(len(sizes)) :
        for j in range(len(sizes[i])) : 
          if sizes[i][0] < sizes[i][1] :
            num  = sizes[i][1]
            sizes[i][1] = sizes[i][0]
            sizes[i][0] = num
        max_wid.append(sizes[i][0])
        max_hei.append(sizes[i][1])
    return max(max_wid) * max(max_hei)
    
    
    