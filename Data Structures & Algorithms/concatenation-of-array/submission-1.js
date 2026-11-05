class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        for (const i in nums) {
            nums.push(nums[i]);
        }

        return nums;
    }
}
