def solution(s):
    answer = []
    s = s.split(' ')
    for word in s:
        converted_word = ""
        for j in range(len(word)):
            if j % 2 == 0:
                converted_word += word[j].upper()
            else:
                converted_word += word[j].lower()
        answer.append(converted_word)

    return ' '.join(answer)

        