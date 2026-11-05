class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = nums;
        for (const i in nums) {
            ans.push(nums[i]);
        }

        return ans;
    }
}
