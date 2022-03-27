def last2(str):
  if(len(str)) < 2:
    return 0
  cnt = 0
  for i in range(len(str)):
    cnt += str[i:i+2] == str[-2:]
  return cnt - 1
