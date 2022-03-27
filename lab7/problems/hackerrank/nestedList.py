scores = {}
mn, secondMn = 9223372036854775807, 9223372036854775807
if __name__ == '__main__':
    for _ in range(int(raw_input())):
        name = raw_input()
        score = float(raw_input())
        if(score < mn):
            secondMn = mn
            mn = score
        if(score > mn and score < secondMn):
            secondMn = score
        scores[name] = score
if(secondMn == 9223372036854775807):
    secondMn = mn
ans = []
for i in scores.keys():
    if(scores[i] == secondMn):
        ans.append(i)
for i in sorted(ans):
    print(i)