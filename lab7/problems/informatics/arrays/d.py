n, arr = int(input()), [int(i) for i in input().split()]
print(len([arr[i] for i in range(1, len(arr)) if arr[i] > arr[i-1]]))