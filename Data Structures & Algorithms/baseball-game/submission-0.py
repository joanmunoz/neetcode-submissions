class Solution:
    def calPoints(self, operations: List[str]) -> int:
        scores = []
        score = 0

        for index in range(len(operations)):
            if operations[index] not in ('+', 'D', 'C'):
                scores.append(operations[index])
                continue

            if operations[index] == '+':
                result = int(scores[len(scores)-1]) + int(scores[len(scores)-2])
                scores.append(result)

            if operations[index] == 'D':
                result = 2 * int(scores[len(scores)-1])
                scores.append(result)

            if operations[index] == 'C':
                scores.pop()

        for num in scores:
            score = score + int(num)

        return score
