class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let res = 0;
        let current_val = 0;

        nums.forEach((value) => {
            if (value === 1) {
                current_val++;
                res = Math.max(current_val, res);
            } else {
                current_val = 0;
            }
        });

        return res;
    }
}
