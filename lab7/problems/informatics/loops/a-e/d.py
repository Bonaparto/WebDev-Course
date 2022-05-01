a = int(input())
isPowerOfTwo = True
while a > 1 and isPowerOfTwo:
    if a % 2 != 0:
        isPowerOfTwo = False
        print("NO")
    a /= 2
if isPowerOfTwo:
    print("YES")