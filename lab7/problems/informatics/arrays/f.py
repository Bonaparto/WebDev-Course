n, arr = int(input()), [int(i) for i in input().split()]
cnt = 0
for i in range(1, len(arr)-1):
    if arr[i] > arr[i-1] and arr[i+1] < arr[i]:
        cnt += 1
print(cnt)