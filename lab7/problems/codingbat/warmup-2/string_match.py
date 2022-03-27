def string_match(a, b):
  cnt = 0 
  for i in range(len(a)):
    if(i + 2 < len(a)):
      for j in range(len(b)):
        if(j + 2 <= len(b)):
          if(a[i:i+2] == b[j:j+2]):
            print(a[i:i+2], b[j:j+2])
            cnt += 1
  return cnt
string_match('aabbccdd', 'abbbxxd')