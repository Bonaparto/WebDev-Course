n, arr = int(input()), [int(i) for i in input().split()]
print(*[arr[i] for i in range(len(arr)) if arr[i] % 2 == 0])