class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closeToOpen = { ')': '(', '}': '{', ']': '[' }

        for letter in s:
            if letter not in closeToOpen:
                stack.append(letter)
            elif stack and closeToOpen[letter] == stack[-1]:
                stack.pop()
            else:
                return False

        return not stack