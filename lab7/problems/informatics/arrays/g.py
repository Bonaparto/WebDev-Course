n, arr = int(input()), [int(i) for i in input().split()]
for i in range(len(arr) // 2):
    arr[i], arr[len(arr)-i-1] = arr[len(arr)-i-1], arr[i]
print(*arr)