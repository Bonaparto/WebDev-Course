a, b = int(input()), int(input())

j = 1
for i in range(a, b + 1):
    while j ** 2 <= i:
        if j ** 2 == i:
            print(j ** 2)
            break
        else:
            j += 1    