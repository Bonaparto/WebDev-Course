from xmlrpc.client import Boolean


def xor(a, b):
    return int((a or b) and not (a and b))
inp = [int(i) for i in input().split()]
if inp[0] == 1:
    inp[0] = True
else:
    inp[0] = False
if inp[1] == 1:
    inp[1] = True
else:
    inp[1] = False
print(xor(inp[0], inp[1]))