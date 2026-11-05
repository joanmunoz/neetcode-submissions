class Solution:
    def scoreOfString(self, s: str) -> int:
        result = 0

        for i in range(len(s)-1):
            num1 = ord(s[i])
            num2 = ord(s[i+1])

            if num1 >= num2:
                result += num1 - num2
            else:
                result += num2 - num1
        
        return result

        