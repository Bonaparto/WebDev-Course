n, arr = int(input()), [int(i) for i in input().split()]
print(*[arr[i] for i in range(len(arr)) if i % 2 == 0])