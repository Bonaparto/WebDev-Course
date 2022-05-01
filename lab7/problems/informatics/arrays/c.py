n, arr = int(input()), [int(i) for i in input().split()]
print(len([arr[i] for i in range(len(arr)) if arr[i] > 0]))