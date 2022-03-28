def double_power(a, b):
    return float(a) ** int(b)

inp = input().split()
print(double_power(inp[0], inp[1]))