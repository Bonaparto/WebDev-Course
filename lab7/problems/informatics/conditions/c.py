a, b = input(), int(input())
if(b == 1):
    if(len(a) == 4):
        if(a[::-1] == a):
            print("YES")
        else:
            print("NO")
    else:
        print("NO")
else:
    if(len(a) == 4):
        if(a[::-1] == a):
            print("NO")
        else:
            print("YES")
    else:
        print("YES")