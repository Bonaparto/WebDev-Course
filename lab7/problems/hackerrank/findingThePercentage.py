if __name__ == '__main__':
    scoresList = {}
    n = int(raw_input())
    student_marks = {}
    for _ in range(n):
        line = raw_input().split()
        name, scores = line[0], line[1:]
        scores = map(float, scores)
        student_marks[name] = scores
        scoresList[name] = scores
    query_name = raw_input()
    total = 0
    for i in scoresList[query_name]:
        total += i
    print("{:.2f}".format(total / len(scoresList[query_name])))