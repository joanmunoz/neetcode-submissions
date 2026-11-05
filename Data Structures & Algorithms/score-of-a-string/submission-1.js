class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let result = 0;

        for (let i = 0; i < s.length-1; i++) {
            const num1 = s.at(i).charCodeAt();
            const num2 = s.at(i+1).charCodeAt();

            if (num1 >= num2) {
                result += num1 - num2;
            } else {
                result += num2 - num1;
            }
        }

        return result;
    }
}
