class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = Array(2 * nums.length);
        ans = [...nums]

        for (const num of nums) {
            ans.push(num);
        }

        return ans;
    }
}
