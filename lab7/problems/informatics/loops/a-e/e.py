a = int(input())
if a <= 1: 
    print(0)
else:
    i, cnt = 2, 1
    while i < a:
        i *= 2
        cnt += 1
    print(cnt) 