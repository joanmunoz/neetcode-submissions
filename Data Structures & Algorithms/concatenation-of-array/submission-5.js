class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = Array(2 * nums.length);
        return [...nums, ...nums];
    }
}
