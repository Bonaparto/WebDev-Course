def front_back(str):
  if len(str) <= 1:
    return str
  a, b = str[len(str)-1], str[0]
  if(len(str)) == 2:
    return a + b
  return a + str[1:len(str)-1] + b