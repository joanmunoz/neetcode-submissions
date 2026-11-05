class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        seen_words = 0
        idx1 = 0

        for idx2 in range(len(t)):
            if seen_words == len(s):
                return True
            
            if s[idx1] == t[idx2]:
                seen_words += 1
                idx1 += 1
        
        return seen_words == len(s)
            

        