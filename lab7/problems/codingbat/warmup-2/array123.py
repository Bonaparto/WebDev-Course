def array123(nums):
  one, two, three = False, False, False
  for i in nums:
    if i == 1:
      one = True
    if i == 2:
      two = True
    if i == 3:
      three = True
  return one and two and three