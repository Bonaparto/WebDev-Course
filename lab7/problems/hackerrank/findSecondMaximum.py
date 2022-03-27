if __name__ == '__main__':
    n = int(raw_input())
    arr = map(int, raw_input().split())
    
mx, ans = -101, -101
for i in arr:
    if(i > mx):
        ans = mx
        mx = i
    if(i > ans and i < mx):
        ans = i
print(ans if ans != -101 else mx)