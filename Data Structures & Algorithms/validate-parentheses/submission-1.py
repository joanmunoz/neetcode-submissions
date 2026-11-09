class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        characters = {
            ')': '(',
            '}': '{',
            ']': '[',
        }

        for letter in s:
            if letter not in characters:
                stack.append(letter)
            elif letter in characters:
                if stack and characters[letter] == stack[-1]:
                    stack.pop()
                else:
                    return False

        return not stack