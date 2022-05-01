a = int(input())

for i in range(a):
    sqr = (i + 1) ** 2 
    if sqr <= a:
        print(sqr)
    else: 
        break