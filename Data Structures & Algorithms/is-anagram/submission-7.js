class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const hashS = {};
        const hashT = {};

        for (let i = 0; i < s.length; i++) { 
            hashS[s[i]] = hashS[s[i]] ? hashS[s[i]] + 1 : 1;
            hashT[t[i]] = hashT[t[i]] ? hashT[t[i]] + 1 : 1;
        }

        for (const char in hashS) {
            if (hashS[char] != hashT[char]) {
                return false;
            }
        }

        return true;
    }
}
