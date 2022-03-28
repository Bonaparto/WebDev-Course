def min(a, b, c, d):
    mn = a
    if mn > b:
        mn = b
    if mn > c:
        mn = c
    if mn > d:
        mn = d
    return mn

inp = [int(i) for i in input().split()]
print(min(inp[0], inp[1], inp[2], inp[3]))